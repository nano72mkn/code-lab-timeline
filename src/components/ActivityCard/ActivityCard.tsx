import { format, formatDistanceToNow, subYears } from 'date-fns';
import { ActivityType } from 'type';

interface ActivityCardProps {
  activity: ActivityType;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <a
      className="p-5 rounded-sm shadow-lg block"
      href={activity.link}
      target="_blank"
      rel="noreferrer"
    >
      <p className="font-bold mb-2">{activity.title}</p>
      <p className="text-sm text-gray-900/50">
        {subYears(new Date(), 1) > new Date(activity.isoDate)
          ? format(new Date(activity.isoDate), 'yyyy/MM/dd')
          : formatDistanceToNow(new Date(activity.isoDate), {
              includeSeconds: true,
              addSuffix: true,
            })}
      </p>
    </a>
  );
};
