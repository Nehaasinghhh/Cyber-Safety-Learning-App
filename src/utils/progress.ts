
import AsyncStorage from '@react-native-async-storage/async-storage';

const PROGRESS_KEY = 'CYBER_SAFETY_COMPLETED_MODULES';

export const getCompletedModules = async (): Promise<string[]> => {
  try {
    const savedProgress = await AsyncStorage.getItem(PROGRESS_KEY);
    return savedProgress ? JSON.parse(savedProgress) : [];
  } catch (error) {
    console.log('Error loading progress:', error);
    return [];
  }
};

export const markModuleCompleted = async (
  moduleId: string,
): Promise<string[]> => {
  try {
    const completedModules = await getCompletedModules();

    if (!completedModules.includes(moduleId)) {
      completedModules.push(moduleId);

      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(completedModules),
      );
    }

    return completedModules;
  } catch (error) {
    console.log('Error saving progress:', error);
    return [];
  }
};
