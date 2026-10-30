
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const modules = [
  {
    id: '1',
    title: 'Technical Threat Landscape',
    description: 'Phishing, malware, passwords and HTTPS.',
    icon: 'shield-checkmark-outline' as const,
    color: '#E8F1FF',
    route: '/lessons/[id]' as const,
  },
  {
    id: '2',
    title: 'Psychological Dimensions',
    description: 'Cyberbullying, grooming and identity theft.',
    icon: 'lock-closed-outline' as const,
    color: '#F0E8FF',
    route: '/lessons/[id]' as const,
  },
  {
    id: '3',
    title: 'Physical Health & Digital Body',
    description: 'Eyes, sleep, posture and hearing.',
    icon: 'body-outline' as const,
    color: '#FFF0E3',
    route: '/lessons/module-3' as const,
  },
  {
    id: '4',
    title: 'Protection Strategies: Mind & Body',
    description: 'Healthy habits and support pathways.',
    icon: 'people-outline' as const,
    color: '#E4F8F0',
    route: '/lessons/module-4' as const,
  },
  {
    id: '5',
    title: 'Cyber Ethics & Legal Framework',
    description: 'Privacy, cybercrime and Indian laws.',
    icon: 'eye-off-outline' as const,
    color: '#FCE8F0',
    route: '/lessons/module-5' as const,
  },
  {
    id: '6',
    title: 'School Response & Action Pledge',
    description: 'Response steps, 3PRS and your pledge.',
    icon: 'footsteps-outline' as const,
    color: '#FFF6D9',
    route: '/lessons/module-6' as const,
  },
];

const safetyTips = [
  'Never share your password or OTP with anyone.',
  'Think before clicking an unfamiliar link.',
  'Use strong, unique passwords for your accounts.',
  'Tell a trusted adult if something feels unsafe online.',
  'Check information before forwarding it.',
];

export default function HomeScreen() {
  const openModule = (module: (typeof modules)[number]) => {
    if (module.id === '1' || module.id === '2') {
      router.push({
        pathname: '/lessons/[id]',
        params: { id: module.id },
      });
      return;
    }

    router.push(module.route);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Ionicons
              name="shield-checkmark"
              size={27}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.headerText}>
            <Text style={styles.appName}>CyberSafe</Text>
            <Text style={styles.subtitle}>
              Learn. Protect. Stay Safe.
            </Text>
          </View>

          <View style={styles.headerBadge}>
            <Ionicons
              name="person-circle-outline"
              size={28}
              color="#2856B6"
            />
          </View>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.heroTextContainer}>
            <Text style={styles.eyebrow}>
              YOUR DIGITAL SAFETY GUIDE
            </Text>

            <Text style={styles.heroTitle}>
              Be smart.{'\n'}Stay safe online.
            </Text>

            <Text style={styles.heroDescription}>
              Build safe internet habits through simple lessons
              and fun activities.
            </Text>
          </View>

          <View style={styles.heroIcon}>
            <Ionicons
              name="shield-checkmark"
              size={76}
              color="#FFFFFF"
            />
          </View>
        </View>

        {/* Learning progress */}
        <View style={styles.progressCard}>
          <View style={styles.progressTop}>
            <View>
              <Text style={styles.sectionTitle}>
                Your learning journey
              </Text>
              <Text style={styles.mutedText}>
                Small steps make a safer you!
              </Text>
            </View>

            <View style={styles.progressIcon}>
              <Ionicons
                name="trophy-outline"
                size={24}
                color="#2856B6"
              />
            </View>
          </View>

          <View style={styles.progressNumbers}>
            <Text style={styles.progressNumber}>
              0 of 6 lessons completed
            </Text>
            <Text style={styles.progressPercent}>0%</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.progressNote}>
            Complete the lessons to build your cyber-safety knowledge.
          </Text>
        </View>

        {/* Learning modules */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>
              Explore learning modules
            </Text>
            <Text style={styles.mutedText}>
              Choose a topic to get started
            </Text>
          </View>

          <Ionicons
            name="book-outline"
            size={25}
            color="#2856B6"
          />
        </View>

        {modules.map((module, index) => (
          <Pressable
            key={module.id}
            onPress={() => openModule(module)}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.moduleCard,
              pressed && styles.modulePressed,
            ]}
          >
            <View
              style={[
                styles.moduleIcon,
                { backgroundColor: module.color },
              ]}
            >
              <Ionicons
                name={module.icon}
                size={27}
                color="#2856B6"
              />
            </View>

            <View style={styles.moduleText}>
              <Text style={styles.moduleTitle}>
                {index + 1}. {module.title}
              </Text>
              <Text style={styles.moduleDescription}>
                {module.description}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={22}
              color="#8290A5"
            />
          </Pressable>
        ))}

        {/* Activities */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>
            Practice your skills
          </Text>
          <Text style={styles.mutedText}>
            Test your ability to recognise online risks.
          </Text>

        </View>

        {/* Daily safety tip */}
        <View style={styles.tipCard}>
          <Ionicons
            name="bulb-outline"
            size={26}
            color="#8A6100"
          />

          <View style={styles.tipText}>
            <Text style={styles.tipTitle}>
              Safety tip of the day
            </Text>
            <Text style={styles.tipDescription}>
              {safetyTips[
                new Date().getDate() % safetyTips.length
              ]}
            </Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Learn safely. Browse confidently. 🔒
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FC',
  },

  container: {
    padding: 20,
    paddingBottom: 36,
    maxWidth: 760,
    width: '100%',
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#2856B6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    flex: 1,
    marginLeft: 12,
  },

  appName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#172B4D',
  },

  subtitle: {
    fontSize: 12,
    color: '#68758A',
    marginTop: 2,
  },

  headerBadge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#E8F0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  hero: {
    backgroundColor: '#2856B6',
    borderRadius: 24,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    overflow: 'hidden',
  },

  heroTextContainer: {
    flex: 1,
  },

  eyebrow: {
    color: '#2856B6',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 8,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: '800',
    lineHeight: 36,
  },

  heroDescription: {
    color: '#E4ECFF',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
    maxWidth: 280,
  },

  heroIcon: {
    marginLeft: 8,
    opacity: 0.95,
  },

  progressCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },

  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#172B4D',
    marginBottom: 5,
  },

  mutedText: {
    color: '#7A879A',
    fontSize: 12,
    lineHeight: 18,
  },

  progressIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#E8F0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  progressNumber: {
    fontSize: 12,
    color: '#52627A',
    fontWeight: '600',
  },

  progressPercent: {
    fontSize: 14,
    color: '#2856B6',
    fontWeight: '800',
  },

  progressTrack: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#E8EDF6',
    overflow: 'hidden',
  },

  progressFill: {
    width: '0%',
    height: '100%',
    backgroundColor: '#2856B6',
  },

  progressNote: {
    fontSize: 11,
    lineHeight: 17,
    color: '#7A879A',
    marginTop: 10,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  moduleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  modulePressed: {
    opacity: 0.75,
  },

  moduleIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  moduleText: {
    flex: 1,
    marginLeft: 13,
    marginRight: 8,
  },

  moduleTitle: {
    color: '#172B4D',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
  },

  moduleDescription: {
    color: '#7A879A',
    fontSize: 12,
    lineHeight: 18,
  },

  activitySection: {
    marginTop: 20,
  },

  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  activityIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#2856B6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activityText: {
    flex: 1,
    marginHorizontal: 12,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#172B4D',
    marginBottom: 5,
  },

  tipCard: {
    marginTop: 22,
    padding: 17,
    borderRadius: 18,
    backgroundColor: '#FFF4D6',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  tipText: {
    flex: 1,
    marginLeft: 12,
  },

  tipTitle: {
    color: '#725100',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 6,
  },

  tipDescription: {
    color: '#725100',
    fontSize: 13,
    lineHeight: 20,
  },

  footer: {
    textAlign: 'center',
    color: '#8A96A8',
    fontSize: 12,
    marginTop: 26,
  },
});
