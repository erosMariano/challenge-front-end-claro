import { CakeType } from '../../types';
import CakesElement from './cakes-elements';
import './styles.scss';

interface CakesSectionProps {
  infoCakes: CakeType[];
  handleSelectedCake(value: number): void;
}
function CakesSection({ infoCakes, handleSelectedCake }: CakesSectionProps) {
  return (
    <div className="container cake-section">
      <h2>
        Please choose your favorite cake from among the following:
        <span className="text-danger">*</span>
      </h2>

      <div className="row">
        {infoCakes.map((cake) => (
          <CakesElement
            handleSelectedCake={handleSelectedCake}
            cake={cake}
            key={cake.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CakesSection;
