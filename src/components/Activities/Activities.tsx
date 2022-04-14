import { ActivityCard } from 'components/ActivityCard';
import { ActivityType } from 'type';

interface ActivitiesProps {
  activities: ActivityType[];
}

export const Activities: React.FC<ActivitiesProps> = ({ activities }) => {
  return (
    <div className="space-y-5">
      {activities.map((activity, index) => (
        <ActivityCard key={index} activity={activity} />
      ))}
    </div>
  );
};
