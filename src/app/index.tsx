
import Animated, {
  FadeInDown,
  FadeInUp,
} from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

// Learning modules
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
    route: '/lessons/module-2' as const,
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

// Daily safety tips
const safetyTips = [
  'Never share your password or OTP with anyone.',
  'Think before clicking an unfamiliar link.',
  'Use strong, unique passwords for your accounts.',
  'Tell a trusted adult if something feels unsafe online.',
  'Check information before forwarding it.',
];

export default function HomeScreen() {
  // Open learning modules
  const openModule = (module: (typeof modules)[number]) => {
    if (module.id === '1') {
      router.push({
        pathname: '/lessons/[id]',
        params: { id: module.id },
      });
      return;
    }

    if (module.id === '2') {
      router.push('/lessons/module-2');
      return;
    }

    if (module.id === '3') {
      router.push('/lessons/module-3');
      return;
    }

    if (module.id === '4') {
      router.push('/lessons/module-4');
      return;
    }

    if (module.id === '5') {
      router.push('/lessons/module-5');
      return;
    }

    if (module.id === '6') {
      router.push('/lessons/module-6');
    }
  };

  // Open existing activities
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Animated.View
          entering={FadeInDown.duration(450)}
          style={styles.header}
        >
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
              color="#4F46E5"
            />
          </View>
        </Animated.View>

        {/* Hero */}
        <Animated.View
          entering={FadeInUp.delay(100).duration(500)}
          style={styles.hero}
        >
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
        </Animated.View>

        {/* Learning Progress */}
        <Animated.View
          entering={FadeInUp.delay(200).duration(500)}
          style={styles.progressCard}
        >
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
                color="#4F46E5"
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
        </Animated.View>

        {/* Learning Modules */}
        <Animated.View
          entering={FadeInDown.delay(250).duration(450)}
          style={styles.sectionHeader}
        >
          <View>
            <Text style={styles.sectionTitle}>
              Explore learning modules
            </Text>

            <Text style={styles.mutedText}>
              Choose a topic to get started
            </Text>
          </View>

          <View style={styles.sectionIcon}>
            <Ionicons
              name="book-outline"
              size={25}
              color="#4F46E5"
            />
          </View>
        </Animated.View>

        {modules.map((module, index) => (
          <Animated.View
            key={module.id}
            entering={FadeInDown
              .delay(300 + index * 90)
              .duration(450)}
          >
            <Pressable
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
                  color="#4F46E5"
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
          </Animated.View>
        ))}

        {/* Activities */}
        <Animated.View
          entering={FadeInUp.delay(850).duration(450)}
          style={styles.activitySection}
        >
          <Text style={styles.sectionTitle}>
            Practice your skills
          </Text>

          <Text style={styles.mutedText}>
            Test your ability to recognise online risks.
          </Text>

          {/* Spot the Red Flags */}
         
          {/* Cyber Safety Quiz */}
        
        </Animated.View>

        {/* Daily Safety Tip */}
        <Animated.View
          entering={FadeInUp.delay(950).duration(450)}
          style={styles.tipCard}
        >
          <View style={styles.tipIcon}>
            <Ionicons
              name="bulb-outline"
              size={26}
              color="#9A6700"
            />
          </View>

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
        </Animated.View>

        {/* Footer */}
        <Text style={styles.footer}>
          Learn safely. Browse confidently. 🔒
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
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
    borderRadius: 16,
    backgroundColor: '#1E3A8A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    flex: 1,
    marginLeft: 12,
  },

  appName: {
    fontSize: 23,
    fontWeight: '800',
    color: '#172554',
  },

  subtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },

  headerBadge: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  hero: {
    backgroundColor: '#3730A3',
    borderRadius: 25,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#3730A3',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 5,
  },

  heroTextContainer: {
    flex: 1,
  },

  eyebrow: {
    color: '#C7D2FE',
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
    color: '#E0E7FF',
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
    padding: 19,
    borderRadius: 22,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#172554',
    marginBottom: 5,
  },

  mutedText: {
    color: '#64748B',
    fontSize: 12,
    lineHeight: 18,
  },

  progressIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: '#E0E7FF',
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
    color: '#475569',
    fontWeight: '600',
  },

  progressPercent: {
    fontSize: 15,
    color: '#4F46E5',
    fontWeight: '800',
  },

  progressTrack: {
    height: 9,
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
    overflow: 'hidden',
  },

  progressFill: {
    width: '0%',
    height: '100%',
    backgroundColor: '#14B8A6',
    borderRadius: 10,
  },

  progressNote: {
    fontSize: 11,
    lineHeight: 17,
    color: '#64748B',
    marginTop: 10,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  sectionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  moduleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  modulePressed: {
    opacity: 0.78,
    backgroundColor: '#F1F5F9',
  },

  moduleIcon: {
    width: 53,
    height: 53,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  moduleText: {
    flex: 1,
    marginLeft: 13,
    marginRight: 8,
  },

  moduleTitle: {
    color: '#172554',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
  },

  moduleDescription: {
    color: '#64748B',
    fontSize: 12,
    lineHeight: 18,
  },

  activitySection: {
    marginTop: 20,
  },

  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  activityIcon: {
    width: 49,
    height: 49,
    borderRadius: 16,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quizIcon: {
    backgroundColor: '#0D9488',
  },

  activityText: {
    flex: 1,
    marginHorizontal: 12,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#172554',
    marginBottom: 5,
  },

  tipCard: {
    marginTop: 24,
    padding: 18,
    borderRadius: 20,
    backgroundColor: '#FFF7E6',
    borderWidth: 1,
    borderColor: '#FDE7B0',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  tipIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#FDECC8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tipText: {
    flex: 1,
    marginLeft: 12,
  },

  tipTitle: {
    color: '#854D0E',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 6,
  },

  tipDescription: {
    color: '#854D0E',
    fontSize: 13,
    lineHeight: 20,
  },

  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 28,
  },
});
