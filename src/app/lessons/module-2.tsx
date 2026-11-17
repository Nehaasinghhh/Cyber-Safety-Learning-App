
import React, { useState, useEffect } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import { Stack, router } from 'expo-router';
import {
  getCompletedModules,
  markModuleCompleted,
} from '../../utils/progress';

const NAVY = '#172554';
const ORANGE = '#4F46E5';
const BG = '#F8FAFC';
const RED = '#E11D48';
const GREEN = '#0D9488';

const risks = [
  {
    title: 'Cyberbullying',
    description:
      'Repeated aggressive behaviour online, including humiliation, exclusion, and threats. It can affect a child’s emotional wellbeing.',
    icon: '💬',
  },
  {
    title: 'Online Grooming',
    description:
      'An adult gradually builds trust with a child to exploit them. It may be disguised as friendship or helpfulness.',
    icon: '⚠️',
  },
  {
    title: 'Identity Theft',
    description:
      'Someone steals personal information to impersonate a child, potentially causing financial or reputational harm.',
    icon: '🪪',
  },
  {
    title: 'Image-Based Abuse',
    description:
      'Sharing or threatening to share intimate images without consent. This can seriously affect a child’s safety and self-esteem.',
    icon: '📷',
  },
  {
    title: 'Sextortion',
    description:
      'Blackmailing someone using intimate images or threats. Children can be targets of this form of abuse.',
    icon: '🚨',
  },
  {
    title: 'Excessive Screen Time',
    description:
      'Compulsive device use that reduces sleep, physical activity, and real-world relationships. Gaming Disorder is also mentioned in the PDF.',
    icon: '📱',
  },
];

const quiz = [
  {
    question:
      'A student is repeatedly humiliated in a class WhatsApp group. Which risk is present?',
    options: ['Identity theft', 'Cyberbullying', 'Excessive screen time'],
    answer: 'Cyberbullying',
    explanation:
      'Repeated humiliation or threats online are signs of cyberbullying.',
  },
  {
    question:
      'A child says an online adult is asking for private photographs. What should you do?',
    options: [
      'Ignore the child',
      'Blame the child',
      'Listen calmly and follow safeguarding procedures',
    ],
    answer: 'Listen calmly and follow safeguarding procedures',
    explanation:
      'Take the concern seriously, reassure the child, and report it through the appropriate safeguarding channels.',
  },
  {
    question:
      'Why might a child avoid telling an adult about online abuse?',
    options: [
      'Self-blame, shame, or fear',
      'Because all children enjoy it',
      'Because it never causes harm',
    ],
    answer: 'Self-blame, shame, or fear',
    explanation:
      'The PDF identifies self-blame, shame, and fear of punishment as barriers to disclosure.',
  },
  {
    question:
      'A child’s sleep and daily activities are affected by compulsive gaming. Which risk may be present?',
    options: ['Data breach', 'Excessive screen time', 'Phishing'],
    answer: 'Excessive screen time',
    explanation:
      'Compulsive use can interfere with sleep, physical activity, and real-world relationships.',
  },
];

export default function ModuleTwo() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [savingCompletion, setSavingCompletion] = useState(false);

  // Load saved Module 2 completion status
  useEffect(() => {
    let active = true;

    const loadCompletion = async () => {
      try {
        const completedModules = await getCompletedModules();

        if (active) {
          setModuleCompleted(completedModules.includes('2'));
        }
      } catch (error) {
        console.log('Error loading Module 2 progress:', error);
      }
    };

    loadCompletion();

    return () => {
      active = false;
    };
  }, []);

  const score = quiz.filter(
    (item, index) => answers[index] === item.answer,
  ).length;

  function chooseAnswer(index: number, answer: string) {
    setAnswers((previous) => ({ ...previous, [index]: answer }));
    setShowResults(false);
  }

  // Save Module 2 completion
  const handleCompleteModule = async () => {
    if (Object.keys(answers).length !== quiz.length || !showResults) {
      Alert.alert(
        'Quiz Incomplete',
        'Please answer all questions and check your answers before completing this module.',
      );
      return;
    }

    if (moduleCompleted || savingCompletion) {
      return;
    }

    try {
      setSavingCompletion(true);

      const completedModules = await markModuleCompleted('2');

      if (completedModules.includes('2')) {
        setModuleCompleted(true);

        Alert.alert(
          'Module Completed!',
          'Module 2 has been completed. Your dashboard progress has been updated.',
        );
      } else {
        Alert.alert(
          'Unable to Save',
          'Your progress could not be saved. Please try again.',
        );
      }
    } catch (error) {
      console.log('Error saving Module 2 progress:', error);

      Alert.alert(
        'Error',
        'Something went wrong while saving your progress.',
      );
    } finally {
      setSavingCompletion(false);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Module 2',
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
            <Text style={styles.moduleNumber}>MODULE 02</Text>
            <Text style={styles.heroTitle}>
              Psychological Dimensions of Cyber Risk
            </Text>
            <Text style={styles.heroSubtitle}>
              Understand the harm. Listen without judgement. Help children feel safe.
            </Text>
          </View>

          <View style={styles.introCard}>
            <Text style={styles.sectionTitle}>What happens to the mind?</Text>
            <Text style={styles.body}>
              Online harm does not only affect devices or accounts. It can also
              affect a child’s emotions, confidence, sleep, and sense of safety.
              Learn to recognise the risks and respond with care.
            </Text>
          </View>

          <Text style={styles.heading}>The Six Psychological Dimensions</Text>

          {risks.map((risk, index) => (
            <View key={risk.title} style={styles.riskCard}>
              <View style={styles.riskHeader}>
                <View style={styles.iconCircle}>
                  <Text style={styles.riskIcon}>{risk.icon}</Text>
                </View>
                <View style={styles.riskHeadingContainer}>
                  <Text style={styles.riskNumber}>
                    RISK {String(index + 1).padStart(2, '0')}
                  </Text>
                  <Text style={styles.riskTitle}>{risk.title}</Text>
                </View>
              </View>
              <Text style={styles.body}>{risk.description}</Text>
            </View>
          ))}

          <Text style={styles.heading}>Psychological Consequences</Text>

          <View style={styles.consequenceCard}>
            <Text style={styles.consequenceTitle}>1. Immediate response</Text>
            <Text style={styles.body}>
              Panic, fear, frustration, and anger. These are possible and
              understandable reactions to a distressing online experience.
            </Text>
          </View>

          <View style={styles.consequenceCard}>
            <Text style={styles.consequenceTitle}>2. Self-blame and helplessness</Text>
            <Text style={styles.body}>
              A child may think, “It’s my fault.” Shame can make it harder for
              them to ask for help or tell a trusted adult.
            </Text>
          </View>

          <View style={styles.warningCard}>
            <Text style={styles.warningTitle}>3. Clinical consequences</Text>
            <Text style={styles.body}>
              The PDF identifies acute stress disorder, depression, and Gaming
              Disorder as possible clinical consequences.
            </Text>
          </View>

          <View style={styles.caseBanner}>
            <Text style={styles.caseBannerTitle}>
              📋 Case Study: Cyberbullying, Image-Based Abuse & Self-Blame
            </Text>
          </View>

          <View style={styles.caseCard}>
            <Text style={styles.body}>
              A 14-year-old girl had been in an online friendship group with
              classmates. One boy began sending her private messages asking for
              photographs. She refused.
            </Text>

            <Text style={styles.body}>
              Within a week, a doctored photograph appeared in a class WhatsApp
              group. She stopped attending school.
            </Text>

            <Text style={styles.body}>
              When her teacher spoke to her, she said: “I should not have been
              in that group. It is my fault.” She had not slept properly in
              three weeks.
            </Text>
          </View>

          <View style={styles.harmsCard}>
            <Text style={styles.harmsTitle}>Harms Present in the Case</Text>
            {[
              'Cyberbullying',
              'Online grooming attempt',
              'Image-based abuse',
              'Acute stress disorder',
              'Sleep disruption',
              'Self-blame blocking help',
            ].map((harm) => (
              <Text key={harm} style={styles.harmItem}>
                <Text style={styles.redDot}>● </Text>
                {harm}
              </Text>
            ))}
          </View>

          <View style={styles.quoteCard}>
            <Text style={styles.quote}>
              “I should not have been in that group. It is my fault.”
            </Text>
          </View>

          <View style={styles.whyCard}>
            <Text style={styles.whyTitle}>Why didn’t she tell?</Text>
            <Text style={styles.body}>
              Self-blame. Shame. Fear.
            </Text>
            <Text style={styles.body}>
              She believed it was her own fault for being in the group. Children
              may fear punishment or worry that adults will blame them.
            </Text>
          </View>

          <View style={styles.responseCard}>
            <Text style={styles.responseTitle}>💡 How should an adult respond?</Text>
            {[
              'Listen calmly and without judgement.',
              'Reassure the child that asking for help was the right thing to do.',
              'Do not blame, shame, or punish the child for reporting the incident.',
              'Follow the school’s safeguarding procedures and involve the appropriate child-protection personnel.',
              'Preserve relevant evidence, such as screenshots and URLs, in line with school procedures.',
            ].map((step, index) => (
              <Text key={step} style={styles.responseItem}>
                {index + 1}. {step}
              </Text>
            ))}
            <Text style={styles.responseFooter}>
              The response must go beyond “just block” — these can be clinical,
              real harms.
            </Text>
          </View>

          <Text style={styles.heading}>Knowledge Check</Text>
          <Text style={styles.quizIntro}>
            Choose the best answer for each question.
          </Text>

          {quiz.map((item, index) => (
            <View key={item.question} style={styles.quizCard}>
              <Text style={styles.questionNumber}>
                QUESTION {index + 1} OF {quiz.length}
              </Text>
              <Text style={styles.question}>{item.question}</Text>

              {item.options.map((option) => {
                const selected = answers[index] === option;
                const correct = showResults && option === item.answer;
                const incorrect =
                  showResults && selected && option !== item.answer;

                return (
                  <Pressable
                    key={option}
                    onPress={() => chooseAnswer(index, option)}
                    style={[
                      styles.option,
                      selected && styles.selectedOption,
                      correct && styles.correctOption,
                      incorrect && styles.incorrectOption,
                    ]}
                  >
                    <Text style={styles.optionText}>
                      {selected ? '◉  ' : '○  '}
                      {option}
                    </Text>
                  </Pressable>
                );
              })}

              {showResults && (
                <Text style={styles.explanation}>
                  {answers[index] === item.answer ? 'Correct! ' : 'Answer: '}
                  {item.explanation}
                </Text>
              )}
            </View>
          ))}

          {showResults && (
            <View style={styles.scoreCard}>
              <Text style={styles.scoreTitle}>Your Score</Text>
              <Text style={styles.score}>
                {score} / {quiz.length}
              </Text>
              <Text style={styles.body}>
                {score === quiz.length
                  ? 'Excellent! You understand the key ideas.'
                  : 'Review the explanations and try again.'}
              </Text>
              <Pressable
                style={styles.secondaryButton}
                onPress={() => {
                  setAnswers({});
                  setShowResults(false);
                }}
              >
                <Text style={styles.secondaryButtonText}>Try Again</Text>
              </Pressable>
            </View>
          )}

          <Pressable
            style={[
              styles.primaryButton,
              Object.keys(answers).length !== quiz.length &&
                styles.disabledButton,
            ]}
            disabled={Object.keys(answers).length !== quiz.length}
            onPress={() => setShowResults(true)}
          >
            <Text style={styles.primaryButtonText}>Check My Answers</Text>
          </Pressable>

          {/* Module 2 completion button */}
          {showResults && (
            <Pressable
              onPress={handleCompleteModule}
              disabled={moduleCompleted || savingCompletion}
              style={[
                styles.completeButton,
                moduleCompleted && styles.completedButton,
              ]}
            >
              <Text style={styles.completeButtonText}>
                {moduleCompleted
                  ? '✓ Module 2 Completed'
                  : savingCompletion
                    ? 'Saving Progress...'
                    : 'Complete Module 2'}
              </Text>
            </Pressable>
          )}

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
    backgroundColor: BG,
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
  moduleNumber: {
    color: '#FFC49D',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
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
  introCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 22,
    borderLeftWidth: 5,
    borderLeftColor: ORANGE,
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
    marginTop: 12,
    marginBottom: 12,
  },
  riskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DCE5EF',
  },
  riskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#FFF0E7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  riskIcon: {
    fontSize: 24,
  },
  riskHeadingContainer: {
    flex: 1,
  },
  riskNumber: {
    color: ORANGE,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  riskTitle: {
    color: NAVY,
    fontSize: 18,
    fontWeight: '800',
    marginTop: 3,
  },
  body: {
    color: '#344054',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 5,
  },
  consequenceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 17,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: ORANGE,
  },
  consequenceTitle: {
    color: NAVY,
    fontSize: 17,
    fontWeight: '800',
  },
  warningCard: {
    backgroundColor: '#FFF1F0',
    borderColor: '#F0B7B2',
    borderWidth: 1,
    borderRadius: 12,
    padding: 17,
    marginBottom: 20,
  },
  warningTitle: {
    color: RED,
    fontSize: 18,
    fontWeight: '800',
  },
  caseBanner: {
    backgroundColor: '#C7372B',
    borderRadius: 10,
    padding: 16,
    marginTop: 8,
  },
  caseBannerTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
    lineHeight: 27,
  },
  caseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: '#DCE5EF',
    marginTop: 12,
    marginBottom: 12,
  },
  harmsCard: {
    backgroundColor: '#FFF4F4',
    borderColor: '#F0D4D4',
    borderWidth: 1,
    borderRadius: 12,
    padding: 17,
    marginBottom: 12,
  },
  harmsTitle: {
    color: RED,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  harmItem: {
    color: '#343434',
    fontSize: 15,
    lineHeight: 27,
  },
  redDot: {
    color: RED,
  },
  quoteCard: {
    backgroundColor: '#F0E3E3',
    borderColor: RED,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginBottom: 12,
  },
  quote: {
    color: RED,
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 25,
  },
  whyCard: {
    backgroundColor: '#FFF7E2',
    borderColor: '#F2E2B5',
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
  },
  whyTitle: {
    color: '#8B6100',
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 8,
  },
  responseCard: {
    backgroundColor: '#E7F4F4',
    borderColor: '#168C91',
    borderWidth: 1,
    borderRadius: 12,
    padding: 17,
    marginBottom: 24,
  },
  responseTitle: {
    color: '#08777C',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  responseItem: {
    color: '#24434A',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
  },
  responseFooter: {
    color: '#08777C',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    marginTop: 8,
  },
  quizIntro: {
    color: '#5D6878',
    fontSize: 15,
    marginBottom: 12,
  },
  quizCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 17,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#DCE5EF',
  },
  questionNumber: {
    color: ORANGE,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
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
    backgroundColor: '#FFFFFF',
  },
  selectedOption: {
    borderColor: NAVY,
    backgroundColor: '#EAF1F9',
  },
  correctOption: {
    borderColor: GREEN,
    backgroundColor: '#E9F8EF',
  },
  incorrectOption: {
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
  scoreTitle: {
    color: NAVY,
    fontSize: 19,
    fontWeight: '800',
  },
  score: {
    color: GREEN,
    fontSize: 36,
    fontWeight: '900',
    marginVertical: 6,
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
  completeButton: {
    backgroundColor: GREEN,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  completedButton: {
    backgroundColor: '#15803D',
  },
  completeButtonText: {
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
});
