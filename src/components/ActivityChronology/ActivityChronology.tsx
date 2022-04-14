import { Activities } from 'components/Activities';
import { ActivityChronology as ActivityChronologyType } from 'utils/groupByYear';

interface ActivityChronologyProps {
  activityChronology: ActivityChronologyType;
}

export const ActivityChronology: React.FC<ActivityChronologyProps> = ({
  activityChronology,
}) => {
  const { year, activities } = activityChronology;
  return (
    <div className="relative pb-20 border-l border-gray-200">
      <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5"></div>
      <p className="absolute font-bold -mt-1 ml-5">{year}</p>
      <div className="ml-5 pt-10">
        <Activities activities={activities} />
      </div>
    </div>
  );
};
