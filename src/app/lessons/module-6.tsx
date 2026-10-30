
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const colors = {
  navy: '#102F50',
  orange: '#E58B00',
  teal: '#087879',
  green: '#218044',
  purple: '#81308D',
  red: '#D53D32',
  white: '#FFFFFF',
  background: '#F1F6FA',
  text: '#3F5E87',
  border: '#D8E3ED',
};

const protocol = [
  {
    title: 'STOP & LISTEN',
    color: colors.teal,
    text: 'Create immediate safety. Listen calmly. Do not promise confidentiality. Do not panic or minimise.',
  },
  {
    title: 'DOCUMENT',
    color: colors.green,
    text: 'Record what the child said, in their own words, as soon as possible. Note time, date, context.',
  },
  {
    title: 'REPORT INTERNALLY',
    color: colors.navy,
    text: 'Inform the Designated Safeguarding Lead or Child Protection Coordinator immediately — same day.',
  },
  {
    title: 'EXTERNAL REFERRAL',
    color: colors.purple,
    text: 'Report to DCPU, CWC, or police as required. Under POCSO, reporting is legally mandatory for teachers.',
  },
  {
    title: 'PRESERVE EVIDENCE',
    color: '#E85B17',
    text: "Screenshot messages, note URLs, record account names. Do not delete anything. Secure the child's device if needed.",
  },
  {
    title: 'FOLLOW UP',
    color: colors.orange,
    text: "Check on the child's wellbeing. Coordinate with counsellor. Update the safeguarding lead on progress.",
  },
];

const scenarios = [
  {
    title: 'Scenario A',
    situation:
      'A teacher receives an email appearing to be from the Principal, asking her to share the student attendance database urgently. The email address is slightly misspelt.',
    risk: 'Threat identified: Spear phishing / social engineering.',
    action:
      'Protective action: Do not share data. Call the Principal directly on a known number to verify. Report the suspicious email to the IT coordinator.',
  },
  {
    title: 'Scenario B',
    situation:
      'A student reports that their school-issued device has become very slow and is now asking for a password to access files that were previously open.',
    risk: 'Threat identified: Ransomware or malware infection.',
    action:
      'Protective action: Disconnect the device from Wi-Fi and the school network immediately. Do not try to open the files. Report to the IT coordinator. Do not pay any ransom.',
  },
  {
    title: 'Scenario C',
    situation:
      "A Year 8 student who was previously outgoing has become withdrawn, is not sleeping, and flinches when her phone makes a sound. When asked what is wrong, she says 'nothing'.",
    risk:
      'Risk identified: Signs of acute stress response from likely cyberbullying or online harassment — self-blame, hypervigilance, and sleep disruption are all present.',
    action:
      'Protective action: Speak to the student privately and non-judgementally. Inform the school child protection coordinator. Notify parents. File a report with DCPU if exploitation is suspected. Do not demand she show you messages — create safety first.',
  },
  {
    title: 'Scenario D',
    situation:
      'A parent contacts the school to say her 12-year-old daughter has been contacted by an adult male online who has been sending gifts to their home address. The daughter met him in an online game and calls him her “online boyfriend”.',
    risk:
      'Risk identified: Active cyber grooming — progressive trust-building, boundary-crossing (home address known), risk of sexual exploitation. The child is unlikely to perceive this as dangerous.',
    action:
      'Protective action: Treat as a child safeguarding emergency. Inform the school child protection coordinator immediately. Do not confront the child alone. Report to DCPU and file a complaint at cybercrime.gov.in. Block all contact between the child and the adult. Support the family with professional guidance.',
  },
  {
    title: 'Scenario E',
    situation:
      'A Year 6 boy spends every free minute on his phone gaming. He refuses to eat lunch and becomes aggressive when teachers ask him to put the phone away. His parents say they cannot get him off the game at night either.',
    risk:
      'Risk identified: Gaming Disorder criteria — loss of control, interpersonal aggression, neglect of alternative activities, disrupted sleep and eating.',
    action:
      'Protective action: Document the pattern. Speak with parents — frame it as a health concern, not a discipline issue. Refer to school counsellor. Suggest a family digital routine and gradual screen time reduction. If attendance is affected, refer to a mental health professional.',
  },
  {
    title: 'Scenario F',
    situation:
      'A student tells a teacher that someone online is asking for her photograph and home address in exchange for help with homework assignments.',
    risk:
      'Risk identified: Online grooming and OSSEC risk — offering help as a manipulation tactic to extract personal information and photographs.',
    action:
      'Protective action: Reassure the student that she has done the right thing by telling you. Report immediately to the school child protection coordinator and the DCPU. File a complaint at cybercrime.gov.in.',
  },
];

const schoolRole = [
  {
    title: 'TAKE THE CHILD INTO CONFIDENCE',
    color: colors.teal,
    text: 'Ensure the child feels safe and does not feel they are in trouble. Listen without judgment.',
  },
  {
    title: 'PRINCIPAL FORMS A COMMITTEE',
    color: colors.green,
    text: 'No individual should manage this alone. A formal school committee ensures accountability, proper procedure, and protection for all.',
  },
  {
    title: 'INFORM THE PARENTS',
    color: colors.navy,
    text: "Involve the child's parents promptly, sensitively, and with the child's safety as the central concern.",
  },
  {
    title: 'REFER TO SCHOOL COUNSELLOR',
    color: colors.purple,
    text: 'Psychosocial support is mandatory — not optional. Engage the school counsellor from the earliest stage.',
  },
  {
    title: 'COLLECT EVIDENCE',
    color: '#E85B17',
    text: 'Preserve all digital evidence: screenshots, URLs, usernames, timestamps. Do not delete. Do not confront perpetrators before evidence is secured.',
  },
  {
    title: 'CONSULT A CYBER LAW EXPERT',
    color: colors.orange,
    text: 'Before filing a police report, seek guidance from someone with cyber law expertise, or contact the helpline 1930.',
  },
];

const mantra = [
  {
    letter: 'P',
    title: 'Precaution',
    color: '#F26319',
    text: 'Think before you click, share, or post. Pause.',
  },
  {
    letter: 'P',
    title: 'Prevention',
    color: colors.teal,
    text: 'Build habits, conversations, and a safe culture in school.',
  },
  {
    letter: 'P',
    title: 'Protection',
    color: colors.purple,
    text: 'Use technical tools: HTTPS, MFA, strong passwords.',
  },
  {
    letter: 'R',
    title: 'Reporting',
    color: colors.red,
    text: 'Report to 1930, cybercrime.gov.in, DCPU, or CHILDLINE 1098.',
  },
  {
    letter: 'S',
    title: 'Sharing',
    color: colors.green,
    text: 'Share knowledge with students, parents, and colleagues.',
  },
];

const takeaways = [
  {
    title: 'Cyber safety is not just technology.',
    text: 'It affects minds and bodies. Psychological and physical consequences are real and deserve serious attention.',
    color: '#E85B17',
  },
  {
    title: "Children won't always tell you.",
    text: 'The most protective thing you can do is create a classroom culture where these conversations are normal.',
    color: colors.teal,
  },
  {
    title: 'Three technical habits — today.',
    text: 'HTTPS, strong unique passwords + MFA, and keeping software updated. Each takes under five minutes.',
    color: colors.green,
  },
  {
    title: 'Warning signs matter.',
    text: 'Withdrawal, sleep changes, sudden aggression around devices, secretive phone use — take them seriously. Under POCSO, you must report.',
    color: colors.red,
  },
  {
    title: 'You are not alone.',
    text: 'Save 1930 in your phone now. Report at cybercrime.gov.in. NIMHANS: 080-46110007. CHILDLINE: 1098.',
    color: colors.purple,
  },
];

function SectionTitle({ children }: { children: string }) {
  return (
    <View style={styles.sectionTitle}>
      <Text style={styles.sectionTitleText}>{children}</Text>
    </View>
  );
}

function NumberedCards({
  items,
}: {
  items: { title: string; text: string; color: string }[];
}) {
  return (
    <View style={styles.cards}>
      {items.map((item, index) => (
        <View key={item.title} style={styles.card}>
          <View style={[styles.cardHeader, { backgroundColor: item.color }]}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>{index + 1}</Text>
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <Text style={styles.cardText}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
}

export default function Module6() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
      >
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            School Response, Prevention & Action Commitment
          </Text>
          <Text style={styles.heroSubtitle}>
            Know exactly what to do — and commit to doing it.
          </Text>
        </View>

        <SectionTitle>
          When a student discloses – Teacher Response Protocol
        </SectionTitle>
        <NumberedCards items={protocol} />

        {scenarios.map((scenario) => (
          <View key={scenario.title} style={styles.scenario}>
            <View style={styles.scenarioHeader}>
              <Text style={styles.scenarioTitle}>{scenario.title}</Text>
            </View>
            <View style={styles.scenarioBody}>
              <Text style={styles.situationLabel}>SITUATION:</Text>
              <Text style={styles.scenarioText}>{scenario.situation}</Text>
              <Text style={styles.riskText}>{scenario.risk}</Text>
              <Text style={styles.scenarioText}>{scenario.action}</Text>
            </View>
          </View>
        ))}

        <SectionTitle>
          The School’s Role: Responding and Preventing
        </SectionTitle>
        <NumberedCards items={schoolRole} />

        <View style={styles.mantraPanel}>
          <Text style={styles.mantraHeading}>The 3PRS Mantra</Text>
          <Text style={styles.mantraSubtitle}>Carry This With You</Text>

          {mantra.map((item) => (
            <View key={item.title} style={styles.mantraRow}>
              <View
                style={[styles.mantraCircle, { backgroundColor: item.color }]}
              >
                <Text style={styles.mantraLetter}>{item.letter}</Text>
              </View>
              <View style={styles.mantraCopy}>
                <Text style={[styles.mantraTitle, { color: item.color }]}>
                  {item.title}
                </Text>
                <Text style={styles.mantraText}>{item.text}</Text>
              </View>
            </View>
          ))}

          <Text style={styles.big3prs}>3PRS</Text>
          <Text style={styles.dailyMantra}>
            Your Daily Mantra for Child Safety Online
          </Text>
        </View>

        <SectionTitle>Five Key Takeaways</SectionTitle>
        <View style={styles.takeaways}>
          {takeaways.map((item, index) => (
            <View key={item.title} style={styles.takeaway}>
              <View style={[styles.takeawayStripe, { backgroundColor: item.color }]} />
              <View style={[styles.takeawayNumber, { backgroundColor: item.color }]}>
                <Text style={styles.numberText}>{index + 1}</Text>
              </View>
              <View style={styles.takeawayCopy}>
                <Text style={[styles.takeawayTitle, { color: item.color }]}>
                  {item.title}
                </Text>
                <Text style={styles.takeawayText}>{item.text}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.thankYou}>
          <Text style={styles.thankYouTitle}>Thank you.</Text>
          <View style={styles.orangeLine} />
          <Text style={styles.thankYouText}>
            Cyber safety is not a one-day training. It is a posture you carry
            into every classroom, every parent meeting, and every student
            conversation.
          </Text>

          <View style={styles.resource}>
            <Text style={styles.resourceNumber}>1930</Text>
            <Text style={styles.resourceLabel}>National Cyber Crime Helpline</Text>
          </View>
          <View style={styles.resource}>
            <Text style={styles.resourceNumber}>cybercrime.gov.in</Text>
            <Text style={styles.resourceLabel}>Cyber Crime Portal</Text>
          </View>
          <View style={styles.resource}>
            <Text style={styles.resourceNumber}>1098</Text>
            <Text style={styles.resourceLabel}>CHILDLINE India</Text>
          </View>
          <View style={styles.resource}>
            <Text style={styles.resourceNumber}>vihaan.org.in</Text>
            <Text style={styles.resourceLabel}>Vihaan</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 14,
    paddingBottom: 32,
    gap: 16,
  },
  hero: {
    backgroundColor: colors.orange,
    padding: 20,
  },
  heroTitle: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 32,
  },
  heroSubtitle: {
    color: colors.white,
    fontSize: 15,
    marginTop: 8,
  },
  sectionTitle: {
    backgroundColor: colors.navy,
    padding: 14,
  },
  sectionTitleText: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '700',
  },
  cards: {
    gap: 14,
  },
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 2,
  },
  cardHeader: {
    minHeight: 46,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  numberCircle: {
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: '#FFFFFF55',
    borderWidth: 1,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  cardTitle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
  },
  cardText: {
    padding: 16,
    color: colors.text,
    fontSize: 15,
    lineHeight: 23,
  },
  scenario: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  scenarioHeader: {
    backgroundColor: colors.orange,
    padding: 14,
  },
  scenarioTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
  },
  scenarioBody: {
    padding: 16,
  },
  situationLabel: {
    fontSize: 16,
    fontWeight: '800',
    color: '#222222',
  },
  scenarioText: {
    fontSize: 16,
    lineHeight: 25,
    color: '#222222',
    marginBottom: 12,
  },
  riskText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#555555',
    fontStyle: 'italic',
    marginTop: 14,
    marginBottom: 4,
  },
  mantraPanel: {
    backgroundColor: colors.navy,
    padding: 20,
  },
  mantraHeading: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  mantraSubtitle: {
    color: '#9BB4D0',
    fontStyle: 'italic',
    marginTop: 12,
    marginBottom: 20,
  },
  mantraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 18,
  },
  mantraCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mantraLetter: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '700',
  },
  mantraCopy: {
    flex: 1,
  },
  mantraTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  mantraText: {
    color: '#9BB4D0',
    fontSize: 14,
    lineHeight: 21,
  },
  big3prs: {
    color: '#F26319',
    fontSize: 54,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 10,
  },
  dailyMantra: {
    color: '#9BB4D0',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 8,
  },
  takeaways: {
    gap: 10,
  },
  takeaway: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 92,
  },
  takeawayStripe: {
    width: 8,
  },
  takeawayNumber: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  takeawayCopy: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
  },
  takeawayTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 5,
  },
  takeawayText: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.text,
  },
  thankYou: {
    backgroundColor: colors.navy,
    borderTopWidth: 8,
    borderTopColor: '#F26319',
    padding: 20,
  },
  thankYouTitle: {
    color: colors.white,
    fontSize: 43,
    fontWeight: '800',
  },
  orangeLine: {
    height: 5,
    width: 150,
    backgroundColor: '#F26319',
    marginVertical: 12,
  },
  thankYouText: {
    color: colors.white,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 20,
  },
  resource: {
    borderLeftWidth: 6,
    borderLeftColor: '#D53D32',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF08',
  },
  resourceNumber: {
    color: '#F26319',
    fontSize: 16,
    fontWeight: '700',
  },
  resourceLabel: {
    color: '#FFFFFF',
    fontSize: 13,
    marginTop: 4,
  },
});
