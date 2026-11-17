import { Alert } from 'react-native';
import { getCompletedModules, markModuleCompleted } from '../../utils/progress';
import { Stack, router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const NAVY = '#172554';
const ORANGE = '#4F46E5';
const RED = '#E11D48';
const GREEN = '#0D9488';

const impacts = [
  {
    title: 'Sleep',
    icon: '😴',
    text: 'Blue light suppresses melatonin. Screen use before bed delays sleep onset and reduces REM quality.',
    tip: 'Put screens away before bedtime and maintain a regular sleep routine.',
  },
  {
    title: 'Eyes',
    icon: '👁️',
    text: 'Digital eye strain can cause dry eyes, blurred vision, and headaches due to prolonged near-focus and reduced blinking.',
    tip: 'Take regular screen breaks and look away from the screen periodically.',
  },
  {
    title: 'Neck & Back',
    icon: '🧍',
    text: '“Text neck” means bending forward for long periods. The PDF notes that this can add up to 27 kg of force on the cervical spine and cause chronic pain.',
    tip: 'Raise your screen closer to eye level and sit with comfortable back support.',
  },
  {
    title: 'Hands & Wrists',
    icon: '🤲',
    text: 'Repetitive strain, carpal tunnel, and De Quervain’s tenosynovitis can result from repeated typing and swiping.',
    tip: 'Keep your wrists comfortable and take regular movement breaks.',
  },
  {
    title: 'Ears',
    icon: '🎧',
    text: 'The PDF warns that extended headphone use above 60% volume can damage hearing. Hearing damage can be irreversible.',
    tip: 'Keep headphone volume moderate and take listening breaks.',
  },
  {
    title: 'Lifestyle',
    icon: '🏃',
    text: 'Sedentary behaviour is linked to obesity, cardiovascular risk, and reduced concentration in class.',
    tip: 'Break up long sitting periods with movement and physical activity.',
  },
];

const statements = [
  'I often use my phone within 30 minutes of going to bed.',
  'I have experienced neck or shoulder pain in the past month.',
  'I or a student sometimes comes to school visibly tired after late-night screen use.',
  'I keep the volume on earphones high in noisy environments.',
  'I sit hunched over my phone or laptop for long periods.',
  'I have noticed a student complaining of eye strain or headaches after device use.',
  'A student in my class seems withdrawn or irritable, possibly from late-night gaming.',
  'I rarely take breaks from my screen during a working day.',
  'I charge my phone next to my bed and check it before sleeping.',
  'I have experienced blurred vision or tired eyes after a screen-heavy day.',
];



export default function ModuleThreeScreen() {
  const [checked, setChecked] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [savingCompletion, setSavingCompletion] = useState(false);

  useEffect(() => {
    const loadProgress = async () => {
      const completed = await getCompletedModules();
      setModuleCompleted(completed.includes('3'));
    };

    loadProgress();
  }, []);

  const handleCompleteModule = async () => {
    if (moduleCompleted || savingCompletion) return;

    setSavingCompletion(true);

    try {
      await markModuleCompleted('3');
      setModuleCompleted(true);
      Alert.alert('Congratulations!', 'Module 3 completed successfully.');
    } catch (error) {
      Alert.alert('Error', 'Could not save your progress. Please try again.');
    } finally {
      setSavingCompletion(false);
    }
  };

  function toggleStatement(index: number) {
    setChecked((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index],
    );
  }

  function chooseAnswer(index: number, option: string) {
    setAnswers((previous) => ({ ...previous, [index]: option }));
    setShowResults(false);
  }

  

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Module 3',
          headerStyle: { backgroundColor: NAVY },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Back',
        }}
      />

      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.duration(500)}>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>MODULE 03</Text>
          <Text style={styles.heroTitle}>
            Physical Health & the Digital Body
          </Text>
          <Text style={styles.heroSubtitle}>
            Bodies are quietly paying a price — including yours.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Your body matters too</Text>
          <Text style={styles.body}>
            Digital devices are useful, but how we use them can affect sleep,
            eyes, posture, hands, hearing, and daily activity. Learn to notice
            the signs and build healthier habits.
          </Text>
        </View>

        <Text style={styles.heading}>Six Areas of Physical Impact</Text>

        {impacts.map((item, index) => (
          <View key={item.title} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <Text style={styles.iconText}>{item.icon}</Text>
              </View>

              <View style={styles.titleContainer}>
                <Text style={styles.eyebrow}>
                  AREA {String(index + 1).padStart(2, '0')}
                </Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            </View>

            <Text style={styles.body}>{item.text}</Text>

            <View style={styles.tip}>
              <Text style={styles.tipTitle}>HEALTHIER HABIT</Text>
              <Text style={styles.tipText}>{item.tip}</Text>
            </View>
          </View>
        ))}

        <View style={styles.activityBanner}>
          <Text style={styles.activityTitle}>
            ✋ Activity: Body-Scan & “Is This You?”
          </Text>
          <Text style={styles.activitySubtitle}>
            Take 5 seconds right now. Notice where you are holding tension:
            jaw, neck, shoulders, or lower back.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Paired Reflection</Text>
          <Text style={styles.body}>
            Privately tick each statement that is true for you. Your selections
            stay on this screen and are not sent anywhere.
          </Text>

          <View style={styles.countRow}>
            <Text style={styles.countText}>
              Selected: {checked.length} of {statements.length}
            </Text>
            <Pressable onPress={() => setChecked([])}>
              <Text style={styles.clearText}>Clear</Text>
            </Pressable>
          </View>

          {statements.map((statement, index) => {
            const selected = checked.includes(index);

            return (
              <Pressable
                key={statement}
                onPress={() => toggleStatement(index)}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: selected }}
                style={[
                  styles.statement,
                  selected && styles.statementSelected,
                ]}
              >
                <View
                  style={[
                    styles.checkbox,
                    selected && styles.checkboxSelected,
                  ]}
                >
                  {selected && <Text style={styles.checkmark}>✓</Text>}
                </View>

                <Text style={styles.statementText}>
                  <Text style={styles.statementNumber}>
                    {index + 1}.{' '}
                  </Text>
                  {statement}
                </Text>
              </Pressable>
            );
          })}

          <View style={styles.reflectionTip}>
            <Text style={styles.tipTitle}>ONE SMALL STEP</Text>
            <Text style={styles.body}>
              Choose one habit to improve today, such as taking screen breaks,
              sitting comfortably, or putting your phone away before sleep.
            </Text>
          </View>
        </View>

        

        <Pressable
          style={[
            styles.completeButton,
            moduleCompleted && styles.completedButton,
          ]}
          onPress={handleCompleteModule}
          disabled={moduleCompleted || savingCompletion}
        >
          <Text style={styles.completeButtonText}>
            {moduleCompleted
              ? '✓ Module 3 Completed'
              : savingCompletion
              ? 'Saving Progress...'
              : 'Complete Module 3'}
          </Text>
        </Pressable>

        <Pressable
          style={styles.backButton}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </Pressable>

        <Text style={styles.footer}>
          CYBER SAFETY & SECURITY • LEARN • RECOGNISE • RESPOND
        </Text>
              </Animated.View>
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F5FA',
  },
  content: {
    padding: 18,
    paddingBottom: 40,
  },
  hero: {
    backgroundColor: NAVY,
    padding: 24,
    borderRadius: 18,
    marginBottom: 18,
  },
  eyebrow: {
    color: ORANGE,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    lineHeight: 34,
    fontWeight: '800',
  },
  heroSubtitle: {
    color: '#E0EAF5',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DCE5EF',
  },
  sectionTitle: {
    color: NAVY,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  heading: {
    color: NAVY,
    fontSize: 22,
    fontWeight: '800',
    marginTop: 14,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#FFF0E7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 24,
  },
  titleContainer: {
    flex: 1,
  },
  cardTitle: {
    color: NAVY,
    fontSize: 18,
    fontWeight: '800',
  },
  body: {
    color: '#344054',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 5,
  },
  tip: {
    backgroundColor: '#E9F8EF',
    borderRadius: 10,
    padding: 12,
    marginTop: 14,
  },
  tipTitle: {
    color: GREEN,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  tipText: {
    color: '#245B3C',
    fontSize: 14,
    lineHeight: 21,
  },
  activityBanner: {
    backgroundColor: '#C7372B',
    borderRadius: 12,
    padding: 17,
    marginTop: 14,
    marginBottom: 12,
  },
  activityTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    lineHeight: 26,
    fontWeight: '800',
  },
  activitySubtitle: {
    color: '#FFF0EC',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
  countRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  countText: {
    color: NAVY,
    fontSize: 13,
    fontWeight: '700',
  },
  clearText: {
    color: RED,
    fontSize: 13,
    fontWeight: '800',
    padding: 5,
  },
  statement: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E6EF',
    borderRadius: 10,
    marginTop: 8,
  },
  statementSelected: {
    borderColor: GREEN,
    backgroundColor: '#F0FAF4',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#98A2B3',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  checkboxSelected: {
    backgroundColor: GREEN,
    borderColor: GREEN,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
  statementText: {
    flex: 1,
    color: '#344054',
    fontSize: 14,
    lineHeight: 21,
  },
  statementNumber: {
    color: NAVY,
    fontWeight: '800',
  },
  reflectionTip: {
    backgroundColor: '#FFF7E2',
    borderRadius: 10,
    padding: 14,
    marginTop: 16,
  },
  muted: {
    color: '#5D6878',
    fontSize: 15,
    marginBottom: 12,
  },
  question: {
    color: NAVY,
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 12,
  },
  option: {
    padding: 13,
    borderWidth: 1,
    borderColor: '#D7DFE9',
    borderRadius: 10,
    marginBottom: 8,
  },
  optionSelected: {
    borderColor: NAVY,
    backgroundColor: '#EAF1F9',
  },
  correctOption: {
    borderColor: GREEN,
    backgroundColor: '#E9F8EF',
  },
  wrongOption: {
    borderColor: RED,
    backgroundColor: '#FFF0EF',
  },
  optionText: {
    color: '#344054',
    fontSize: 14,
    lineHeight: 21,
  },
  explanation: {
    color: NAVY,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
  scoreCard: {
    backgroundColor: '#E9F8EF',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    marginBottom: 14,
  },
  score: {
    color: GREEN,
    fontSize: 36,
    fontWeight: '900',
    marginVertical: 6,
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 11,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 12,
  },
  secondaryButtonText: {
    color: NAVY,
    fontWeight: '800',
  },
  primaryButton: {
    backgroundColor: NAVY,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  disabledButton: {
    opacity: 0.45,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  backButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 8,
  },
  backButtonText: {
    color: NAVY,
    fontSize: 15,
    fontWeight: '700',
  },
  footer: {
    color: '#7B8797',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 1,
    marginTop: 12,
    lineHeight: 17,
  },
  completeButton: {
    backgroundColor: GREEN,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  completedButton: {
    backgroundColor: '#64748B',
  },

  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});