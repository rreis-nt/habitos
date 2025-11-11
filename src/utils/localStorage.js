export const saveHabits = (habits) => {
  try {
    localStorage.setItem('rreisnt-habits', JSON.stringify(habits));
  } catch (error) {
    console.error('Erro ao salvar hábitos:', error);
  }
};

export const loadHabits = () => {
  try {
    const habits = localStorage.getItem('rreisnt-habits');
    return habits ? JSON.parse(habits) : [];
  } catch (error) {
    console.error('Erro ao carregar hábitos:', error);
    return [];
  }
};

export const saveTheme = (theme) => {
  try {
    localStorage.setItem('rreisnt-theme', theme);
  } catch (error) {
    console.error('Erro ao salvar tema:', error);
  }
};

export const loadTheme = () => {
  try {
    const theme = localStorage.getItem('rreisnt-theme');
    return theme || 'dark';
  } catch (error) {
    console.error('Erro ao carregar tema:', error);
    return 'dark';
  }
};

export const resetAllData = () => {
  try {
    localStorage.removeItem('rreisnt-habits');
    localStorage.removeItem('rreisnt-theme');
  } catch (error) {
    console.error('Erro ao resetar dados:', error);
  }
};
