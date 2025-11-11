import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, CheckCircle } from 'lucide-react';

const StatsPanel = ({ habits }) => {
  const totalHabits = habits.length;
  const completedToday = habits.filter(habit => {
    if (!habit.lastCompleted) return false;
    const today = new Date().toDateString();
    const lastCompleted = new Date(habit.lastCompleted).toDateString();
    return today === lastCompleted;
  }).length;

  const overallProgress = totalHabits > 0 ? (completedToday / totalHabits) * 100 : 0;

  const data = [
    { name: 'Concluídos', value: completedToday, color: '#10b981' },
    { name: 'Pendentes', value: totalHabits - completedToday, color: '#64748b' }
  ];

  return (
    <motion.div
      className="glass-effect rounded-3xl p-8 mb-12 border border-slate-700/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h2
        className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <TrendingUp className="w-6 h-6 text-blue-400" />
        Estatísticas Gerais
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <motion.div
          className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-center mb-3">
            <Target className="w-10 h-10 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{totalHabits}</div>
          <div className="text-slate-400 font-medium">Total de Hábitos</div>
        </motion.div>

        <motion.div
          className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-center mb-3">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{completedToday}</div>
          <div className="text-slate-400 font-medium">Concluídos Hoje</div>
        </motion.div>

        <motion.div
          className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-center mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">{Math.round(overallProgress)}%</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{Math.round(overallProgress)}%</div>
          <div className="text-slate-400 font-medium">Progresso Hoje</div>
        </motion.div>
      </div>

      {totalHabits > 0 && (
        <motion.div
          className="bg-slate-800/50 rounded-2xl p-6 border border-slate-600/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Distribuição de Progresso</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-slate-300">Concluídos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-500"></div>
              <span className="text-sm text-slate-300">Pendentes</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StatsPanel;
