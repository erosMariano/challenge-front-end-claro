import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles.scss';

import { CakeType } from '../../types';
import { formatInputDate } from '../../utils/formatDate';
import { formatPhoneNumber } from '../../utils/formatPhone';
import formatTime from '../../utils/formatTime';
import { sendDataToDB } from '../../utils/sendDataToDB';
import { ModalSuccess } from '../modal';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const orderFormSchema = z.object({
  name: z.string().min(3, { message: 'Mandatory "name" field' }),
  last: z.string().optional(),
  deliveryDate: z.string().optional(),
  preferredDeliveryTime: z.string().optional(),
  phone: z.string().refine((value) => /^\d{3} \d{3} \d{4}$/.test(value), {
    message: 'Phone field with invalid format. Use ### ### ####'
  }),
  email: z
    .string()
    .email({ message: "The 'email' field must be a valid email." }),

  address: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  postal: z.string().optional(),
  country: z.string().optional(),
  cake: z.string().min(3, { message: 'Select a cake' })
});
export type OrderSchema = z.infer<typeof orderFormSchema>;

interface OrderInformationProps {
  cakeSelected: CakeType;
}
function OrderInformation({ cakeSelected }: OrderInformationProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<OrderSchema>({
    resolver: zodResolver(orderFormSchema)
  });
  const [onModal, setOnModal] = useState(false);

  const [time, setTime] = useState('AM');
  const [inputDate, setInputDate] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [selectedCake, setSelectedCake] = useState(cakeSelected.title);
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputDate(formatInputDate(value));
  };

  const handleChangeModal = (value: boolean) => {
    setOnModal(() => value);
  };
  const handleTime = () => {
    if (time === 'AM') {
      setTime('PM');
    } else {
      setTime('AM');
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatTime(e.target.value);
    setInputTime(value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatPhoneNumber(e.target.value);
    setValue('phone', value, { shouldValidate: true });

    setInputPhoneNumber(value);
  };

  const onSubmit = async (data: OrderSchema) => {
    await sendDataToDB(data);
    handleChangeModal(true);
    reset();

    setInputDate('');
    setInputPhoneNumber('');
    setInputTime('');
  };
  console.log(errors);

  useEffect(() => {
    if (cakeSelected.title) {
      setValue('cake', cakeSelected.title, { shouldValidate: true });
    }
    setSelectedCake(cakeSelected.title);
  }, [cakeSelected, setValue]);
  return (
    <div className="container">
      <ModalSuccess
        onActiveModal={onModal}
        handleChangeModal={handleChangeModal}
      />
      <h2>Order Information</h2>
      <form
        autoComplete="off"
        className="form-order"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="container">
          <div className="row">
            <div className="pl-0 pr-0 pr-md-2 flex-column flex-md-row d-flex align-items-center w-100">
              <div className="mb-3 w-100 pr-2 pr-0 pr-md-2">
                <label htmlFor="name" className="form-label">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="First"
                  {...register('name', { required: 'O campo é obrigatório.' })}
                />
              </div>

              <div className="w-100 pl-0 pl-md-2" style={{ marginTop: 17 }}>
                <input
                  placeholder="Last"
                  type="text"
                  className="form-control"
                  id="lastname"
                  {...register('last')}
                />
              </div>
            </div>

            <div className="pl-0 pr-0 pr-md-2 d-flex align-items-center w-100 flex-column flex-md-row">
              <div className="mb-3 mt-3 mt-md-0 position-relative w-100 pr-0 pr-md-2">
                <label htmlFor="deliveryDate" className="form-label">
                  Delivery date
                </label>

                <input
                  type="text"
                  value={inputDate}
                  {...register('deliveryDate', {
                    onChange: (e) => handleChange(e)
                  })}
                  maxLength={10}
                  className="form-control"
                  placeholder="MM/DD/YYYY"
                />
                <img src="/images/calendar.png" alt="" className="icon-input" />
              </div>

              <div className="mb-3 position-relative  w-100 pl-0 pl-md-2">
                <label htmlFor="deliveryTime" className="form-label">
                  Preferred delivery time
                </label>
                <input
                  type="text"
                  className="form-control"
                  maxLength={5}
                  value={inputTime}
                  placeholder="HH:MM"
                  id="deliveryTime"
                  {...register('preferredDeliveryTime', {
                    onChange: (e) => handleTimeChange(e)
                  })}
                />
                <span onClick={handleTime} className="am-clock">
                  {time}
                </span>
                <img src="/images/clock.png" alt="" className="icon-input" />
              </div>
            </div>

            <div className="pl-0 pr-0 pr-md-2 d-flex align-items-start w-100 flex-column flex-md-row">
              <div className="mb-3 w-100 pr-0 pr-md-2">
                <label htmlFor="teste" className="form-label">
                  Phone<span className="text-danger">*</span>
                </label>
                <input
                  placeholder="### ### ####"
                  type="text"
                  className="form-control"
                  maxLength={13}
                  value={inputPhoneNumber}
                  {...register('phone', {
                    pattern: {
                      value: /^\d{3} \d{3} \d{5}$/,
                      message: ''
                    },
                    onChange: (e) => handlePhoneNumberChange(e)
                  })}
                />
              </div>

              <div className=" w-100 pl-0 pl-md-2">
                <label htmlFor="email" className="form-label">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...register('email', {
                    required: 'O campo é obrigatório.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Endereço de e-mail inválido.'
                    }
                  })}
                />

                <span className="desc-email">
                  To receive the complete receipt
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="mb-3 mt-5 pl-0 pr-0 col-md-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                placeholder="Street Address"
                type="text"
                className="form-control"
                id="address"
                {...register('address')}
              />
            </div>

            <div className="mb-3 col-md-12 pl-0 pr-0">
              <input
                placeholder="Street Address Line 2"
                type="text"
                className="form-control"
                id="address2"
                {...register('address2')}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 pl-0 pr-0 pr-md-2">
              <div className="mb-3">
                <input
                  placeholder="City"
                  type="text"
                  className="form-control"
                  id="city"
                  {...register('city')}
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Region"
                  type="text"
                  className="form-control"
                  id="region"
                  {...register('region')}
                />
              </div>
            </div>

            <div className="col-md-6 pl-0 pr-0 pl-md-2">
              <div className="mb-3">
                <input
                  placeholder="Postal / Zip Code"
                  type="text"
                  className="form-control"
                  id="postalCode"
                  {...register('postal')}
                />
              </div>

              <div className="select-dropdown mb-3">
                <select {...register('country')}>
                  <option value="">Country</option>
                  <option value="country_1">Country 1</option>
                  <option value="country_2">Country 2</option>
                </select>
              </div>
            </div>

            <input
              className="d-none"
              value={selectedCake}
              type="text"
              {...register('cake')}
            />
          </div>

          <div className="errors row d-flex flex-column pl-0 pr-0">
            {errors.name && (
              <span className="text-danger d-block">{errors.name.message}</span>
            )}
            {errors.phone && (
              <span className="text-danger d-block">
                {errors.phone.message}
              </span>
            )}
            {errors.email && (
              <span className="text-danger d-block">
                {errors.email.message}
              </span>
            )}
            {errors.cake && (
              <span className="text-danger d-block">{errors.cake.message}</span>
            )}
          </div>

          <div className="mb-3">
            <button type="submit" className="button-submit">
              Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OrderInformation;
