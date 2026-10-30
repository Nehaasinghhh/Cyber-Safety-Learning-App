
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
const GREEN = '#249D62';
const RED = '#BD3D32';

const strategies = [
  {
    title: 'Awareness',
    icon: '🧠',
    description:
      'Knowledge is the most powerful protection. A child who knows what grooming looks like is harder to deceive.',
    action: 'Learn about online risks and discuss warning signs with students.',
  },
  {
    title: 'Think Before Posting',
    icon: '💭',
    description:
      'Ask yourself: “Would I be comfortable if everyone saw this forever?” Apply this to every image, comment, and message.',
    action: 'Pause before posting, sharing, or commenting.',
  },
  {
    title: 'Manage Expectations',
    icon: '📱',
    description:
      'Social media shows edited highlight reels, not the whole reality. Help students recognise curated content.',
    action: 'Remember that online posts do not show every part of a person’s life.',
  },
  {
    title: 'Regular Conversations',
    icon: '💬',
    description:
      'Talk about online experiences routinely, not only when something goes wrong. Normalise the conversation.',
    action: 'Ask students regularly whether they feel safe online.',
  },
  {
    title: 'Limit & Purposeful Use',
    icon: '⏰',
    description:
      'Devices out of bedrooms overnight. Screen-time limits and clear intentions for going online reduce vulnerability.',
    action: 'Create reasonable screen-time boundaries and keep devices away at bedtime.',
  },
  {
    title: 'Protect Real-World Life',
    icon: '🌳',
    description:
      'If digital use replaces offline friendships, physical activity, or sleep, that is a signal worth exploring gently.',
    action: 'Make time for friends, hobbies, exercise, and sleep.',
  },
  {
    title: 'Seek Formal Help',
    icon: '🤝',
    description:
      'Refer to a school counsellor, DCPO, or Vihaan when professional support is needed. Cyberbullying and gaming addiction may require professional support.',
    action: 'Seek appropriate help rather than trying to manage serious concerns alone.',
  },
];

const physicalStrategies = [
  {
    title: '20-20-20 Rule',
    icon: '👁️',
    detail: 'Every 20 minutes, look at something 20 feet away for 20 seconds.',
  },
  {
    title: 'Correct Posture',
    icon: '🧍',
    detail:
      'Keep the screen at eye level, feet flat, and shoulders relaxed. Raise your phone instead of bending your neck down.',
  },
  {
    title: 'Digital Curfew',
    icon: '🌙',
    detail:
      'Avoid screens for 30–60 minutes before bed. Charge phones outside the bedroom and share this habit with parents.',
  },
  {
    title: 'Movement Breaks',
    icon: '🏃',
    detail:
      'Every 30 minutes, stand, stretch your neck, roll your shoulders, and flex your wrists.',
  },
  {
    title: '60/60 Rule for Ears',
    icon: '🎧',
    detail:
      'Keep headphone volume at or below 60% for no more than 60 minutes at a time. If you cannot hear someone nearby, it may be too loud.',
  },
];

export default function ModuleFourScreen() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Module 4',
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
          <Text style={styles.eyebrow}>MODULE 04</Text>
          <Text style={styles.heroTitle}>
            Protection Strategies: Mind & Body
          </Text>
          <Text style={styles.heroSubtitle}>
            From awareness to action.
          </Text>
        </View>

        <View style={styles.introCard}>
          <Text style={styles.sectionTitle}>Protect yourself and others</Text>
          <Text style={styles.body}>
            Cyber safety is more than using technology. Healthy digital habits,
            open conversations, and knowing when to seek help can protect
            students' psychological and physical wellbeing.
          </Text>
        </View>

        <Text style={styles.heading}>
          Seven Psychological Protection Strategies
        </Text>

        {strategies.map((item, index) => (
          <View key={item.title} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <Text style={styles.iconText}>{item.icon}</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.eyebrow}>
                  STRATEGY {index + 1}
                </Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            </View>

            <Text style={styles.body}>{item.description}</Text>

            <View style={styles.actionBox}>
              <Text style={styles.actionLabel}>PUT IT INTO PRACTICE</Text>
              <Text style={styles.actionText}>{item.action}</Text>
            </View>
          </View>
        ))}

        <View style={styles.activityBanner}>
          <Text style={styles.activityTitle}>
            ✋ Activity: Five Physical Strategies
          </Text>
          <Text style={styles.activitySubtitle}>
            Practise these simple habits together. Choose one strategy to
            start using today.
          </Text>
        </View>

        {physicalStrategies.map((item, index) => (
          <View key={item.title} style={styles.physicalCard}>
            <View style={styles.row}>
              <Text style={styles.physicalIcon}>{item.icon}</Text>
              <View style={styles.titleContainer}>
                <Text style={styles.eyebrow}>
                  PHYSICAL HABIT {index + 1}
                </Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            </View>
            <Text style={styles.body}>{item.detail}</Text>
          </View>
        ))}

        <View style={styles.referralCard}>
          <Text style={styles.sectionTitle}>When should you seek help?</Text>
          <Text style={styles.body}>
            Some online safety concerns need more than personal habits.
            Serious cyberbullying, grooming, or gaming-related problems may
            need professional support.
          </Text>

          <View style={styles.referralItem}>
            <Text style={styles.referralNumber}>01</Text>
            <View style={styles.titleContainer}>
              <Text style={styles.referralTitle}>School counsellor</Text>
              <Text style={styles.body}>
                Seek support for psychological wellbeing and emotional
                difficulties.
              </Text>
            </View>
          </View>

          <View style={styles.referralItem}>
            <Text style={styles.referralNumber}>02</Text>
            <View style={styles.titleContainer}>
              <Text style={styles.referralTitle}>DCPO</Text>
              <Text style={styles.body}>
                Contact the appropriate child-protection officer when a
                safeguarding concern requires escalation.
              </Text>
            </View>
          </View>

          <View style={styles.referralItem}>
            <Text style={styles.referralNumber}>03</Text>
            <View style={styles.titleContainer}>
              <Text style={styles.referralTitle}>Vihaan</Text>
              <Text style={styles.body}>
                Use the support resource identified in the training material
                when appropriate.
              </Text>
            </View>
          </View>

          <View style={styles.warningBox}>
            <Text style={styles.warningTitle}>Remember</Text>
            <Text style={styles.warningText}>
              Listen without judgment. Take concerns seriously and follow
              your school's safeguarding procedures.
            </Text>
          </View>
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
    letterSpacing: 1.4,
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
    fontSize: 16,
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
    fontWeight: '800',
    marginTop: 14,
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
    fontSize: 18,
    fontWeight: '800',
  },
  body: {
    color: '#344054',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 4,
  },
  actionBox: {
    backgroundColor: '#E9F8EF',
    padding: 12,
    borderRadius: 10,
    marginTop: 14,
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
    fontWeight: '800',
    lineHeight: 26,
  },
  activitySubtitle: {
    color: '#FFF0EC',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
  physicalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DCE5EF',
  },
  physicalIcon: {
    fontSize: 30,
    marginRight: 13,
    width: 42,
    textAlign: 'center',
  },
  referralCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginTop: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#DCE5EF',
  },
  referralItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 18,
  },
  referralNumber: {
    color: ORANGE,
    fontSize: 18,
    fontWeight: '900',
    width: 42,
  },
  referralTitle: {
    color: NAVY,
    fontSize: 16,
    fontWeight: '800',
  },
  warningBox: {
    backgroundColor: '#FFF0EF',
    borderRadius: 10,
    padding: 13,
    marginTop: 18,
  },
  warningTitle: {
    color: RED,
    fontSize: 15,
    fontWeight: '800',
  },
  warningText: {
    color: '#762D28',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 5,
  },
  muted: {
    color: '#5D6878',
    fontSize: 14,
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
});
