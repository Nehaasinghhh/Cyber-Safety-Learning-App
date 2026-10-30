
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Stack, router } from 'expo-router';

const NAVY = '#102F50';
const ORANGE = '#ED5B19';
const RED = '#BD3D32';
const GREEN = '#249D62';

const ethics = [
  {
    icon: '🔒',
    title: 'Privacy',
    description:
      'Personal information — yours and others’ — deserves the same respect online as offline. Share only what you would share in person. Data posted online may never fully disappear.',
    question:
      'Would you hand out your home address to a stranger on the street?',
    action:
      'Protect personal information. Think carefully before sharing addresses, photographs, contact details, or private information.',
  },
  {
    icon: '💬',
    title: 'Respectful Communication',
    description:
      'The internet is not an anonymous zone without consequences. Words typed online are real words with real effects. Cyberbullying, trolling, and hate speech cause genuine harm.',
    question:
      'Would you say this to the person’s face? If not, do not say it online.',
    action:
      'Communicate respectfully. Never use messages or posts to threaten, bully, or humiliate another person.',
  },
  {
    icon: '🔎',
    title: 'Critical Information Literacy',
    description:
      'Not everything online is true. Verify sources before sharing information, especially health, safety, or news-related content. Misinformation spreads fast.',
    question:
      'Use SIFT: Stop, Investigate the source, Find better coverage, Trace claims.',
    action:
      'Pause and verify information before believing it or forwarding it to others.',
  },
];

const crimes = [
  {
    number: '01',
    icon: '🛡️',
    title: 'Cyber Grooming',
    description:
      'An adult builds an online relationship with a child over time through gifts, compliments, and trust-building.',
    warning:
      'An online contact gives gifts, asks for secrecy, or gradually crosses personal boundaries.',
    action:
      'Take the concern seriously and follow school child-safeguarding procedures.',
  },
  {
    number: '02',
    icon: '💔',
    title: 'Cyberbullying & Stalking',
    description:
      'Repeated harassment through messages, fake profiles, or persistent monitoring.',
    warning:
      'Repeated threatening messages, harassment, fake accounts, or unwanted monitoring.',
    action:
      'Preserve evidence and report the concern through the appropriate school channels.',
  },
  {
    number: '03',
    icon: '🚨',
    title: 'Sextortion & CSAM',
    description:
      'A child is manipulated into sharing sexual images that may later be used for blackmail.',
    warning:
      'Someone threatens, pressures, or blackmails a child using private images or messages.',
    action:
      'Protect the child, do not blame them, preserve evidence safely, and escalate immediately through safeguarding procedures.',
  },
  {
    number: '04',
    icon: '🎭',
    title: 'Identity Theft & Catfishing',
    description:
      'Someone creates a fake identity to deceive a child, posing as a peer or trusted adult.',
    warning:
      'An online person’s identity or story cannot be verified, or they pretend to be someone else.',
    action:
      'Do not share personal details. Verify identities and report suspicious accounts.',
  },
  {
    number: '05',
    icon: '🎣',
    title: 'Phishing, Vishing & Smishing',
    description:
      'Fraudulent messages sent through email, phone calls, or SMS to obtain passwords, OTPs, or other sensitive information.',
    warning:
      'Unexpected messages or calls demand credentials, OTPs, money, or urgent action.',
    action:
      'Do not click suspicious links or share passwords and OTPs. Verify the sender independently.',
  },
  {
    number: '06',
    icon: '🎬',
    title: 'Deepfake Misuse',
    description:
      'AI-generated fake images or videos of real people used for harassment or blackmail.',
    warning:
      'An image or video appears suspicious, manipulated, or is being used to threaten someone.',
    action:
      'Do not forward the content. Preserve relevant evidence and report the incident.',
  },
];

const laws = [
  {
    icon: '💻',
    title: 'IT Act 2000 & Amendments',
    description:
      'The Information Technology Act and its amendments form part of India’s legal framework for cyber-related matters.',
  },
  {
    icon: '🧒',
    title: 'POCSO Act 2012',
    description:
      'The Protection of Children from Sexual Offences Act is included in the PDF’s framework for child online safety.',
  },
  {
    icon: '🔐',
    title: 'DPDP Act 2023',
    description:
      'The Digital Personal Data Protection Act is included in the PDF in connection with personal data protection.',
  },
];

export default function ModuleFiveScreen() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);


  return (
    <>
      <Stack.Screen
        options={{
          title: 'Module 5',
          headerStyle: { backgroundColor: NAVY },
          headerTintColor: '#FFFFFF',
        }}
      />

      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>MODULE 05</Text>
          <Text style={styles.heroTitle}>
            Cyber Ethics, Crime Types & Legal Framework
          </Text>
          <Text style={styles.heroSubtitle}>
            Know the law. Protect your students.
          </Text>
        </View>

        <View style={styles.introCard}>
          <Text style={styles.sectionTitle}>
            What is cyber ethics?
          </Text>
          <Text style={styles.body}>
            Cyber ethics means behaving responsibly and respectfully online.
            It includes protecting privacy, communicating respectfully, and
            checking whether online information is reliable.
          </Text>
        </View>

        <Text style={styles.heading}>
          Three Core Principles of Cyber Ethics
        </Text>

        {ethics.map((item, index) => (
          <View key={item.title} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <Text style={styles.iconText}>{item.icon}</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.eyebrow}>
                  PRINCIPLE {index + 1}
                </Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            </View>

            <Text style={styles.body}>{item.description}</Text>

            <View style={styles.questionBox}>
              <Text style={styles.questionLabel}>ASK YOURSELF</Text>
              <Text style={styles.questionPrompt}>{item.question}</Text>
            </View>

            <View style={styles.actionBox}>
              <Text style={styles.actionLabel}>PRACTISE IT</Text>
              <Text style={styles.actionText}>{item.action}</Text>
            </View>
          </View>
        ))}

        <View style={styles.siftBanner}>
          <Text style={styles.siftTitle}>🔎 Remember SIFT</Text>
          <View style={styles.siftRow}>
            <Text style={styles.siftLetter}>S</Text>
            <Text style={styles.siftText}>Stop</Text>
          </View>
          <View style={styles.siftRow}>
            <Text style={styles.siftLetter}>I</Text>
            <Text style={styles.siftText}>Investigate the source</Text>
          </View>
          <View style={styles.siftRow}>
            <Text style={styles.siftLetter}>F</Text>
            <Text style={styles.siftText}>Find better coverage</Text>
          </View>
          <View style={styles.siftRow}>
            <Text style={styles.siftLetter}>T</Text>
            <Text style={styles.siftText}>Trace claims</Text>
          </View>
        </View>

        <Text style={styles.heading}>
          Six Types of Cybercrime Targeting Children
        </Text>
        <Text style={styles.muted}>
          Learn to recognise these risks and respond responsibly.
        </Text>

        {crimes.map((item) => (
          <View key={item.number} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.crimeNumber}>
                <Text style={styles.crimeNumberText}>{item.number}</Text>
              </View>
              <Text style={styles.crimeIcon}>{item.icon}</Text>
              <View style={styles.titleContainer}>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            </View>

            <Text style={styles.body}>{item.description}</Text>

            <View style={styles.warningBox}>
              <Text style={styles.warningLabel}>WARNING SIGNS</Text>
              <Text style={styles.warningText}>{item.warning}</Text>
            </View>

            <View style={styles.actionBox}>
              <Text style={styles.actionLabel}>PROTECTIVE ACTION</Text>
              <Text style={styles.actionText}>{item.action}</Text>
            </View>
          </View>
        ))}

        <Text style={styles.heading}>
          India’s Legal Framework for Child Online Safety
        </Text>

        <View style={styles.noticeBox}>
          <Text style={styles.noticeTitle}>Know the framework</Text>
          <Text style={styles.body}>
            The PDF identifies the following three laws. This section
            introduces their names and general subject areas; it is not a
            substitute for legal advice or the full statutory text.
          </Text>
        </View>

        {laws.map((law, index) => (
          <View key={law.title} style={styles.lawCard}>
            <View style={styles.row}>
              <Text style={styles.lawIcon}>{law.icon}</Text>
              <View style={styles.titleContainer}>
                <Text style={styles.eyebrow}>
                  LEGAL FRAMEWORK {index + 1}
                </Text>
                <Text style={styles.cardTitle}>{law.title}</Text>
              </View>
            </View>
            <Text style={styles.body}>{law.description}</Text>
          </View>
        ))}

        <View style={styles.activityBanner}>
          <Text style={styles.activityTitle}>
            ✋ Remember Before You Share
          </Text>
          <Text style={styles.activitySubtitle}>
            Protect privacy. Communicate respectfully. Verify information.
            Report concerns through the appropriate channels.
          </Text>
        </View>


        <Pressable
          style={styles.backButton}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </Pressable>

        <Text style={styles.footer}>
          CYBER SAFETY & SECURITY • LEARN • RECOGNISE • RESPOND
        </Text>
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
    letterSpacing: 1.3,
    marginBottom: 5,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    lineHeight: 35,
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
    marginBottom: 18,
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
    lineHeight: 29,
    fontWeight: '800',
    marginTop: 14,
    marginBottom: 12,
  },
  muted: {
    color: '#5D6878',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DCE5EF',
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
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '800',
  },
  body: {
    color: '#344054',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 4,
  },
  questionBox: {
    backgroundColor: '#FFF7E2',
    borderRadius: 10,
    padding: 13,
    marginTop: 14,
  },
  questionLabel: {
    color: '#9A5B00',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 5,
  },
  questionPrompt: {
    color: '#67420B',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
  },
  actionBox: {
    backgroundColor: '#E9F8EF',
    borderRadius: 10,
    padding: 13,
    marginTop: 12,
  },
  actionLabel: {
    color: GREEN,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 5,
  },
  actionText: {
    color: '#245B3C',
    fontSize: 14,
    lineHeight: 21,
  },
  siftBanner: {
    backgroundColor: NAVY,
    borderRadius: 14,
    padding: 18,
    marginTop: 8,
    marginBottom: 18,
  },
  siftTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 12,
  },
  siftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#38536D',
  },
  siftLetter: {
    width: 36,
    color: '#FF9A62',
    fontSize: 19,
    fontWeight: '900',
  },
  siftText: {
    color: '#FFFFFF',
    fontSize: 15,
    flex: 1,
  },
  crimeNumber: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#FFF0E7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  crimeNumberText: {
    color: ORANGE,
    fontSize: 13,
    fontWeight: '900',
  },
  crimeIcon: {
    fontSize: 23,
    marginRight: 10,
  },
  warningBox: {
    backgroundColor: '#FFF0EF',
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
  },
  warningLabel: {
    color: RED,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 5,
  },
  warningText: {
    color: '#762D28',
    fontSize: 14,
    lineHeight: 21,
  },
  noticeBox: {
    backgroundColor: '#FFF7E2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  noticeTitle: {
    color: '#805000',
    fontSize: 17,
    fontWeight: '800',
  },
  lawCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DCE5EF',
  },
  lawIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  activityBanner: {
    backgroundColor: '#C7372B',
    borderRadius: 12,
    padding: 17,
    marginTop: 14,
    marginBottom: 18,
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
    lineHeight: 22,
    marginTop: 8,
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
});
