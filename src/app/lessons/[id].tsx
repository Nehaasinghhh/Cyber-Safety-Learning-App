
import React, { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const NAVY = '#172554';
const ORANGE = '#4F46E5';
const RED = '#E11D48';
const GREEN = '#0D9488';
const BG = '#F8FAFC';
const MUTED = '#64748B';

const threats = [
  {
    title: 'Phishing',
    icon: 'fish-outline' as const,
    color: '#ED5B19',
    description:
      'Fake emails/messages tricking users into revealing credentials or clicking malicious links',
  },
  {
    title: 'Malware',
    icon: 'bug-outline' as const,
    color: '#BD3D32',
    description:
      'Harmful software: viruses, spyware, ransomware that infect and damage devices/data',
  },
  {
    title: 'Ransomware',
    icon: 'lock-closed-outline' as const,
    color: '#81228D',
    description:
      'Encrypts files and demands payment for access. Schools are frequent targets',
  },
  {
    title: 'Social Engineering',
    icon: 'people-outline' as const,
    color: '#167C7D',
    description:
      'Manipulating people psychologically to reveal information or take unsafe actions – human emotions – trust, fear or curiosity',
  },
  {
    title: 'Password Attacks',
    icon: 'key-outline' as const,
    color: '#D99100',
    description:
      'Brute-force, credential stuffing, and dictionary attacks to gain unauthorised access',
  },
  {
    title: 'Data Breach',
    icon: 'server-outline' as const,
    color: '#21834A',
    description:
      'Unauthorised access to personal/institutional data — student records, contacts, finances',
  },
];

const warningSigns = [
  'Device noticeably slower without reason',
  'Unexpected pop-ups or new browser toolbars',
  "Sent messages you didn't write",
  'Locked out of accounts',
  "Contacts receiving spam 'from you'",
  'Files encrypted or missing',
];

const habits = [
  {
    title: 'Check for HTTPS',
    description:
      'Look for the padlock in your browser bar before entering any data',
  },
  {
    title: 'Strong Passwords + MFA',
    description:
      '12+ chars, unique per site, enable Multi-Factor Authentication now',
  },
  {
    title: 'Keep Software Updated',
    description:
      'Run updates promptly — patches fix vulnerabilities attackers exploit',
  },
];

const activities = [
  {
    question:
      "An email from your bank says 'Urgent: verify your account' with a link.",
    answer: 'Suspicious',
  },
  {
    question: "Your school portal shows 'https://' in the address bar.",
    answer: 'Safe',
  },
  {
    question:
      'A pop-up says your device is infected and tells you to call a number immediately.',
    answer: 'Suspicious',
  },
  {
    question:
      'You receive a WhatsApp from an unknown number offering free movie downloads.',
    answer: 'Suspicious',
  },
  {
    question: 'A government site ends in .gov.in and has a padlock icon.',
    answer: 'Safe',
  },
  {
    question:
      'An email asks you to confirm your salary details for a government scheme.',
    answer: 'Suspicious',
  },
  {
    question: 'Your antivirus software prompts you to update via its own app.',
    answer: 'Safe',
  },
  {
    question: "A student receives a message: 'You've won a prize — click here.'",
    answer: 'Suspicious',
  },
];

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
    </View>
  );
}

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [reflection, setReflection] = useState(false);

  if (String(id) !== '1') {
    return (
      <View style={styles.notReady}>
        <Stack.Screen options={{ title: 'Learning Module' }} />
        <Ionicons name="book-outline" size={52} color={ORANGE} />
        <Text style={styles.notReadyTitle}>Module coming next</Text>
        <Text style={styles.bodyText}>
          We are building the modules one at a time from your PDF.
        </Text>
      </View>
    );
  }

  const correctCount = activities.filter(
    (item, index) => answers[index] === item.answer,
  ).length;

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Module 1',
          headerStyle: { backgroundColor: NAVY },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '700' },
        }}
      />

      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.page}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.duration(500)}>

        {/* PDF title slide */}
        <View style={styles.hero}>
          <View style={styles.orangeEdge} />
          <View style={styles.moduleNumber}>
            <Text style={styles.moduleNumberText}>1</Text>
          </View>

          <Text style={styles.heroTitle}>
            The Technical{'\n'}Threat Landscape
          </Text>

          <View style={styles.goldLine} />

          <Text style={styles.heroSubtitle}>
            Know the threats. Build the habits.
          </Text>

          <View style={styles.heroIllustration}>
            <Ionicons name="laptop-outline" size={86} color="#1C4776" />
            <Ionicons
              name="shield-checkmark-outline"
              size={39}
              color="#1C4776"
              style={styles.heroShield}
            />
          </View>
        </View>

        <View style={styles.topicStrip}>
          <Ionicons name="book-outline" size={21} color={ORANGE} />
          <Text style={styles.topicStripText}>
            Phishing • Malware • Passwords • HTTPS
          </Text>
        </View>

        {/* Six categories from the PDF */}
        <SectionTitle
          title="The Six Main Categories of Cyber Threat"
          subtitle="Know what the threats look like."
        />

        <View style={styles.threatGrid}>
          {threats.map((threat, index) => (
            <View key={threat.title} style={styles.threatCard}>
              <View style={styles.threatTitleRow}>
                <View
                  style={[
                    styles.threatIcon,
                    { backgroundColor: threat.color },
                  ]}
                >
                  <Ionicons
                    name={threat.icon}
                    size={23}
                    color="#FFFFFF"
                  />
                </View>
                <Text style={styles.threatTitle}>{threat.title}</Text>
              </View>

              <View
                style={[
                  styles.threatDivider,
                  { backgroundColor: threat.color },
                ]}
              />

              <Text style={styles.threatDescription}>
                {threat.description}
              </Text>
            </View>
          ))}
        </View>

        {/* PDF phishing case study */}
        <View style={styles.redSectionHeader}>
          <Ionicons name="clipboard-outline" size={22} color="#FFFFFF" />
          <Text style={styles.coloredHeaderText}>
            Case Study: The Phishing Incident
          </Text>
        </View>

        <View style={styles.caseCard}>
          <Text style={styles.caseHeading}>What Happened?</Text>
          <Text style={styles.caseDescription}>
            A school received what appeared to be an official email from the
            District Education Office, asking teachers to re-enter their
            login credentials. Several teachers clicked the link and entered
            their passwords. Three days later, the school's student database
            was accessed, and student contact details were leaked. The email
            was sent by an attacker — not from the Education Office. Parents
            began receiving spam messages.
          </Text>

          {[
            'Official-looking email sent',
            'Teacher clicks link',
            'Fake website loads',
            'Credentials entered',
            'Student data stolen',
          ].map((step, index) => (
            <View key={step} style={styles.caseStep}>
              <View style={styles.caseStepNumber}>
                <Text style={styles.caseStepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.caseStepText}>{step}</Text>
            </View>
          ))}
        </View>

        <View style={styles.analysisCard}>
          <Text style={styles.analysisTitle}>Attack Analysis</Text>

          {[
            'Type: Phishing attack',
            'No malware installed — just a fake website',
            'Exploited human trust, not a technical flaw',
            'One click was all it took',
            'Attacker copied official branding exactly',
            'Outcome: student data leak, parent spam',
          ].map((item) => (
            <View key={item} style={styles.analysisRow}>
              <View style={styles.analysisBullet} />
              <Text style={styles.analysisText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Warning signs and protective habits */}
        <SectionTitle
          title="Recognise Compromise + 3 Protective Habits"
          subtitle="Warning signs to notice and habits to practise."
        />

        <View style={styles.warningCard}>
          <View style={styles.warningHeader}>
            <Ionicons name="warning" size={19} color="#FFFFFF" />
            <Text style={styles.coloredHeaderText}>
              Warning Signs of Compromise
            </Text>
          </View>

          <View style={styles.cardInner}>
            {warningSigns.map((item) => (
              <View key={item} style={styles.warningRow}>
                <View style={styles.warningMark}>
                  <Text style={styles.warningMarkText}>!</Text>
                </View>
                <Text style={styles.warningText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.habitsCard}>
          <View style={styles.habitsHeader}>
            <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
            <Text style={styles.coloredHeaderText}>
              3 Habits — Do These Today
            </Text>
          </View>

          <View style={styles.cardInner}>
            {habits.map((habit, index) => (
              <View key={habit.title} style={styles.habitItem}>
                <View style={styles.habitNumber}>
                  <Text style={styles.habitNumberText}>{index + 1}</Text>
                </View>
                <View style={styles.habitContent}>
                  <Text style={styles.habitTitle}>{habit.title}</Text>
                  <Text style={styles.habitDescription}>
                    {habit.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Interactive activity from the PDF */}
        <View style={styles.activityHeading}>
          <Ionicons name="eye-outline" size={25} color={ORANGE} />
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Activity: Spot the Red Flag!</Text>
            <Text style={styles.sectionSubtitle}>
              Call out 'Safe' or 'Suspicious' for each statement. Trust your
              instinct!
            </Text>
          </View>
        </View>

        {activities.map((item, index) => {
          const selected = answers[index];
          const isCorrect = selected === item.answer;

          return (
            <View key={item.question} style={styles.questionCard}>
              <Text style={styles.questionNumber}>
                STATEMENT {index + 1} OF {activities.length}
              </Text>

              <Text style={styles.questionText}>{item.question}</Text>

              <View style={styles.answerRow}>
                {(['Safe', 'Suspicious'] as const).map((choice) => {
                  const isSelected = selected === choice;
                  return (
                    <Pressable
                      key={choice}
                      onPress={() =>
                        setAnswers((previous) => ({
                          ...previous,
                          [index]: choice,
                        }))
                      }
                      style={[
                        styles.answerButton,
                        choice === 'Safe'
                          ? styles.safeButton
                          : styles.suspiciousButton,
                        isSelected && styles.answerSelected,
                      ]}
                    >
                      <Text style={styles.answerButtonText}>{choice}</Text>
                    </Pressable>
                  );
                })}
              </View>

              {selected ? (
                <Text
                  style={[
                    styles.feedback,
                    { color: isCorrect ? GREEN : RED },
                  ]}
                >
                  {isCorrect
                    ? 'Correct!'
                    : `Not quite. The correct answer is ${item.answer}.`}
                </Text>
              ) : null}
            </View>
          );
        })}

        <View style={styles.scoreCard}>
          <Ionicons name="trophy-outline" size={30} color={ORANGE} />
          <View style={{ flex: 1 }}>
            <Text style={styles.scoreTitle}>Your activity score</Text>
            <Text style={styles.scoreText}>
              {Object.keys(answers).length === activities.length
                ? `You scored ${correctCount} out of ${activities.length}.`
                : `You answered ${Object.keys(answers).length} of ${activities.length} statements.`}
            </Text>
          </View>
          <Text style={styles.scoreNumber}>
            {correctCount}/{activities.length}
          </Text>
        </View>

        <Pressable
          onPress={() => setReflection((previous) => !previous)}
          style={styles.reflectionCard}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={23} color="#8A6412" />
          <View style={{ flex: 1 }}>
            <Text style={styles.reflectionTitle}>
              Pair Reflection (60 sec)
            </Text>
            <Text style={styles.reflectionText}>
              Share one thing on your device you know you should change or fix.
            </Text>
            {reflection ? (
              <Text style={styles.reflectionPrompt}>
                Think about your passwords, browser security, and software
                updates.
              </Text>
            ) : null}
          </View>
          <Ionicons
            name={reflection ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#8A6412"
          />
        </Pressable>

        <View style={styles.footer}>
          <Ionicons name="shield-checkmark" size={22} color={GREEN} />
          <Text style={styles.footerText}>
            Know the threats. Build the habits.
          </Text>
        </View>
              </Animated.View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: BG },
  page: { padding: 16, paddingBottom: 40, maxWidth: 900, width: '100%', alignSelf: 'center' },

  hero: {
    backgroundColor: NAVY,
    minHeight: 285,
    borderRadius: 5,
    padding: 24,
    overflow: 'hidden',
    justifyContent: 'center',
    borderLeftWidth: 7,
    borderLeftColor: ORANGE,
  },
  orangeEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 5,
    backgroundColor: ORANGE,
  },
  moduleNumber: {
    width: 61,
    height: 61,
    borderRadius: 31,
    backgroundColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  moduleNumberText: { color: '#FFFFFF', fontSize: 31, fontWeight: '800' },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 31,
    fontWeight: '800',
    lineHeight: 39,
    maxWidth: 320,
  },
  goldLine: { height: 5, width: 130, backgroundColor: '#E9A72D', marginTop: 12 },
  heroSubtitle: {
    color: '#B7C8DD',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'italic',
    marginTop: 10,
  },
  heroIllustration: {
    position: 'absolute',
    right: 15,
    top: 65,
    opacity: 0.8,
  },
  heroShield: { position: 'absolute', right: 20, top: 20 },

  topicStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    padding: 14,
    marginTop: 13,
    marginBottom: 27,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE3EC',
  },
  topicStripText: { flex: 1, color: NAVY, fontWeight: '700', fontSize: 13 },

  sectionHeading: { marginTop: 7, marginBottom: 15 },
  sectionTitle: { color: NAVY, fontSize: 21, fontWeight: '800', lineHeight: 28 },
  sectionSubtitle: { color: MUTED, fontSize: 13, lineHeight: 20, marginTop: 4 },

  threatGrid: { gap: 12, marginBottom: 28 },
  threatCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE2E9',
    padding: 16,
    elevation: 2,
  },
  threatTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  threatIcon: {
    width: 43,
    height: 43,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  threatTitle: { flex: 1, color: '#25344A', fontSize: 17, fontWeight: '800' },
  threatDivider: { height: 3, marginTop: 12, marginBottom: 12 },
  threatDescription: { color: '#566982', fontSize: 14, lineHeight: 22 },

  redSectionHeader: {
    backgroundColor: RED,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginTop: 2,
  },
  coloredHeaderText: { flex: 1, color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  caseCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E3E8',
    padding: 17,
  },
  caseHeading: { color: RED, fontSize: 18, fontWeight: '800', marginBottom: 12 },
  caseDescription: { color: '#34445B', fontSize: 14, lineHeight: 23, marginBottom: 18 },
  caseStep: { flexDirection: 'row', alignItems: 'center', marginBottom: 9, gap: 10 },
  caseStepNumber: { backgroundColor: RED, width: 27, height: 27, alignItems: 'center', justifyContent: 'center' },
  caseStepNumberText: { color: '#FFFFFF', fontWeight: '800' },
  caseStepText: { flex: 1, color: '#35445A', fontSize: 14 },

  analysisCard: {
    backgroundColor: '#FFF5F3',
    borderWidth: 1,
    borderColor: '#E6BDB8',
    marginTop: 13,
    marginBottom: 29,
    padding: 16,
  },
  analysisTitle: { color: '#632A26', fontSize: 18, fontWeight: '800', marginBottom: 13 },
  analysisRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 13 },
  analysisBullet: { width: 12, height: 12, backgroundColor: RED, marginTop: 5 },
  analysisText: { flex: 1, color: '#4D3B3A', fontSize: 14, lineHeight: 21 },

  warningCard: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#DDE3EB', marginBottom: 16 },
  warningHeader: { backgroundColor: RED, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 9 },
  cardInner: { padding: 14 },
  warningRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 14 },
  warningMark: { backgroundColor: '#C96860', width: 25, height: 25, alignItems: 'center', justifyContent: 'center' },
  warningMarkText: { color: '#FFFFFF', fontSize: 17, fontWeight: '800' },
  warningText: { flex: 1, color: '#39495E', fontSize: 14, lineHeight: 21 },

  habitsCard: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#DDE3EB', marginBottom: 29 },
  habitsHeader: { backgroundColor: GREEN, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 9 },
  habitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: '#EAF1FA',
    borderWidth: 1,
    borderColor: '#D6E1EF',
    padding: 13,
    marginBottom: 11,
  },
  habitNumber: { backgroundColor: GREEN, width: 34, height: 34, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  habitNumberText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  habitContent: { flex: 1 },
  habitTitle: { color: '#263B52', fontSize: 15, fontWeight: '800', marginBottom: 5 },
  habitDescription: { color: '#566982', fontSize: 13, lineHeight: 21 },

  activityHeading: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 15 },
  questionCard: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#DCE3EC', padding: 15, marginBottom: 12 },
  questionNumber: { color: ORANGE, fontSize: 10, letterSpacing: 1, fontWeight: '800', marginBottom: 9 },
  questionText: { color: NAVY, fontSize: 15, lineHeight: 23, fontWeight: '600', marginBottom: 14 },
  answerRow: { flexDirection: 'row', gap: 10 },
  answerButton: { flex: 1, paddingVertical: 11, paddingHorizontal: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  safeButton: { borderColor: GREEN, backgroundColor: '#F0FAF4' },
  suspiciousButton: { borderColor: RED, backgroundColor: '#FFF4F2' },
  answerSelected: { borderWidth: 2 },
  answerButtonText: { fontSize: 13, fontWeight: '800', color: NAVY },
  feedback: { fontSize: 13, fontWeight: '700', marginTop: 12, lineHeight: 20 },

  scoreCard: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#DCE3EC', padding: 16, marginTop: 5 },
  scoreTitle: { color: NAVY, fontSize: 15, fontWeight: '800' },
  scoreText: { color: MUTED, fontSize: 12, lineHeight: 18, marginTop: 4 },
  scoreNumber: { color: NAVY, fontSize: 19, fontWeight: '800' },

  reflectionCard: { flexDirection: 'row', alignItems: 'flex-start', gap: 11, padding: 15, backgroundColor: '#F7EDD8', borderWidth: 1, borderColor: '#E4BD6D', marginTop: 16 },
  reflectionTitle: { color: '#80601B', fontSize: 14, fontWeight: '800' },
  reflectionText: { color: '#80601B', fontSize: 13, lineHeight: 20, marginTop: 5 },
  reflectionPrompt: { color: '#80601B', fontSize: 13, lineHeight: 20, fontWeight: '700', marginTop: 9 },

  footer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 9, padding: 22 },
  footerText: { color: NAVY, fontWeight: '700', fontSize: 13 },
  notReady: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: BG },
  notReadyTitle: { fontSize: 22, fontWeight: '800', color: NAVY, marginTop: 16, marginBottom: 8 },
  bodyText: { fontSize: 14, lineHeight: 22, textAlign: 'center', color: MUTED },
});
 1


