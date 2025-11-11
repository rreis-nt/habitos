import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Brain, RotateCcw, Trash2 } from 'lucide-react';
import HabitCard from './components/HabitCard';
import AddHabitModal from './components/AddHabitModal';
import StatsPanel from './components/StatsPanel';
import ThemeToggle from './components/ThemeToggle';
import { saveHabits, loadHabits, saveTheme, loadTheme, resetAllData } from './utils/localStorage';

function App() {
  const [habits, setHabits] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedHabits = loadHabits();
    const savedTheme = loadTheme();
    setHabits(savedHabits);
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    saveTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const addHabit = (newHabit) => {
    const updatedHabits = [...habits, newHabit];
    setHabits(updatedHabits);
    saveHabits(updatedHabits);
  };

  const completeHabit = (habitId) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === habitId) {
        const today = new Date().toDateString();
        const lastCompleted = habit.lastCompleted ? new Date(habit.lastCompleted).toDateString() : null;

        if (today !== lastCompleted) {
          return {
            ...habit,
            completed: habit.completed + 1,
            lastCompleted: new Date().toISOString()
          };
        }
      }
      return habit;
    });
    setHabits(updatedHabits);
    saveHabits(updatedHabits);
  };

  const undoHabit = (habitId) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === habitId) {
        const today = new Date().toDateString();
        const lastCompleted = habit.lastCompleted ? new Date(habit.lastCompleted).toDateString() : null;

        if (today === lastCompleted && habit.completed > 0) {
          return {
            ...habit,
            completed: habit.completed - 1,
            lastCompleted: null
          };
        }
      }
      return habit;
    });
    setHabits(updatedHabits);
    saveHabits(updatedHabits);
  };

  const deleteHabit = (habitId) => {
    const updatedHabits = habits.filter(habit => habit.id !== habitId);
    setHabits(updatedHabits);
    saveHabits(updatedHabits);
  };

  const handleResetHabits = () => {
    setHabits([]);
    saveHabits([]);
  };

  const handleResetData = () => {
    resetAllData();
    setHabits([]);
    setTheme('dark');
    document.documentElement.classList.remove('dark');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-500">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-12 h-12 text-blue-400" />
            </motion.div>
            <h1 className="text-5xl font-bold gradient-text">
              RREISNT Habit Tracker
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Organize seus hábitos com estilo e alcance suas metas diárias
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <motion.button
              onClick={handleResetHabits}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-orange-500/25 glow-effect"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-5 h-5" />
              Resetar Hábitos
            </motion.button>
            <motion.button
              onClick={handleResetData}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-red-500/25 glow-effect"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trash2 className="w-5 h-5" />
              Resetar Tudo
            </motion.button>
          </div>
        </motion.header>

        <StatsPanel habits={habits} />

        <div className="mb-8">
          <motion.h2
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Meus Hábitos
          </motion.h2>
          {habits.length === 0 ? (
            <motion.div
              className="text-center py-16 glass-effect rounded-3xl border border-slate-700/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brain className="w-20 h-20 mx-auto mb-6 text-slate-500" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-4">Nenhum hábito adicionado ainda</h3>
              <p className="text-slate-400 text-lg mb-6 max-w-md mx-auto">
                Comece sua jornada de hábitos clicando no botão + abaixo para adicionar seu primeiro hábito!
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {habits.map((habit, index) => (
                <motion.div
                  key={habit.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <HabitCard
                    habit={habit}
                    onComplete={completeHabit}
                    onUndo={undoHabit}
                    onDelete={deleteHabit}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-5 rounded-full shadow-2xl transition-all duration-300 glow-effect"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Plus className="w-7 h-7" />
          </motion.div>
        </motion.button>

        <AddHabitModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddHabit={addHabit}
        />
      </div>
    </div>
  );
}

export default App;
