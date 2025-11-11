import { motion } from 'framer-motion';
import { CheckCircle, X, Trash2 } from 'lucide-react';

const HabitCard = ({ habit, onComplete, onUndo, onDelete }) => {
  const today = new Date().toDateString();
  const lastCompleted = habit.lastCompleted ? new Date(habit.lastCompleted).toDateString() : null;
  const isCompletedToday = today === lastCompleted;

  const getProgressPercentage = () => {
    if (habit.frequency === 'diário') return (habit.completed / 30) * 100;
    if (habit.frequency === 'semanal') return (habit.completed / 4) * 100;
    if (habit.frequency === 'mensal') return (habit.completed / 1) * 100;
    return 0;
  };

  const progress = Math.min(getProgressPercentage(), 100);

  return (
    <motion.div
      className={`card-hover glass-effect rounded-3xl p-6 border border-slate-700/50 ${isCompletedToday ? 'ring-2 ring-green-400/50' : ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{habit.name}</h3>
          <p className="text-slate-400 text-sm font-medium">{habit.category}</p>
        </div>
        <motion.button
          onClick={() => onDelete(habit.id)}
          className="text-red-400 hover:text-red-300 transition-colors duration-300 p-2 rounded-xl hover:bg-red-500/10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Trash2 className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-slate-400 font-medium">Progresso</span>
          <span className="text-sm text-white font-semibold">{habit.completed} / {habit.frequency === 'diário' ? 30 : habit.frequency === 'semanal' ? 4 : 1}</span>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 h-full rounded-full shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <motion.button
          onClick={() => onComplete(habit.id)}
          disabled={isCompletedToday}
          className={`flex-1 py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${
            isCompletedToday
              ? 'bg-green-600/80 text-white cursor-not-allowed shadow-green-500/25'
              : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-emerald-500/25 glow-effect'
          }`}
          whileHover={!isCompletedToday ? { scale: 1.02, y: -1 } : {}}
          whileTap={!isCompletedToday ? { scale: 0.98 } : {}}
        >
          <CheckCircle className="w-5 h-5" />
          {isCompletedToday ? 'Concluído Hoje' : 'Marcar como Feito'}
        </motion.button>

        {isCompletedToday && (
          <motion.button
            onClick={() => onUndo(habit.id)}
            className="py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-orange-500/25 glow-effect"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <X className="w-5 h-5" />
            Desfazer
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default HabitCard;
