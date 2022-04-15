import { ActivityCard } from 'components/ActivityCard';
import { ActivityType } from 'type';

interface ActivitiesProps {
  activities: ActivityType[];
}

export const Activities: React.FC<ActivitiesProps> = ({ activities }) => {
  return (
    <div className="space-y-5">
      {activities.map((activity, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-10 top-1/2 -mt-1.5 -ml-1.5 w-3 h-3 bg-gray-300 rounded-full" />
          <div className="absolute -left-5 top-1/2 -ml-1.5 w-4 border border-b-1 border-gray-200" />
          <ActivityCard activity={activity} />
        </div>
      ))}
    </div>
  );
};
