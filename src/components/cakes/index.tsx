import { CakeType } from '../../types';
import CakesElement from './cakes-elements';
import './styles.scss';

interface CakesSectionProps {
  infoCakes: CakeType[];
}
function CakesSection({ infoCakes }: CakesSectionProps) {
  return (
    <div className="container cake-section">
      <h2>
        Please choose your favorite cake from among the following:
        <span className="text-danger">*</span>
      </h2>

      <div className="row">
        {infoCakes.map((cake) => (
          <CakesElement cake={cake} key={cake.id} />
        ))}
      </div>
    </div>
  );
}

export default CakesSection;
