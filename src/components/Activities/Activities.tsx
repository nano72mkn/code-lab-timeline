import { ActivityCard } from 'components/ActivityCard';
import { motion, Variants } from 'framer-motion';
import { ActivityType } from 'type';

interface ActivitiesProps {
  activities: ActivityType[];
}

export const Activities: React.FC<ActivitiesProps> = ({ activities }) => {
  const activityCardVariants: Variants = {
    active: {
      y: 0,
      opacity: 1,
    },
    disabled: {
      y: 10,
      rotate: 0,
    },
  };

  return (
    <motion.div className="space-y-5">
      {activities.map((activity, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-5 md:-left-10 top-1/2 -mt-1 -ml-1 w-2 h-2 bg-gray-200 rounded-full" />
          <motion.div className="opacity-0" variants={activityCardVariants}>
            <ActivityCard activity={activity} />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};
