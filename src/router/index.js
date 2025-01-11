import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/components/AboutPage.vue';
import VisualDisability from '@/components/VisualDisability.vue';
import HearingDisability from '@/components/HearingDisability.vue';
import MotorDisability from '@/components/MotorDisability.vue';
import CognitiveDisability from '@/components/CognitiveDisability.vue';

const routes = [
  { path: '/', name: 'Home', component: AboutPage },
  { path: '/home', name: 'About', component: AboutPage },
  { path: '/visual', name: 'Visual', component: VisualDisability },
  { path: '/hearing', name: 'Hearing', component: HearingDisability },
  { path: '/motor', name: 'Motor', component: MotorDisability },
  { path: '/cognitive', name: 'Cognitive', component: CognitiveDisability },
];

const router = createRouter({
  history: createWebHistory('/projecte-accesibilitat/'), 
  routes,
});

export default router;
