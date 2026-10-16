import iconHeart from 'healthicons/public/icons/svg/outline/specialties/cardiology.svg?raw';
import iconActivity from 'healthicons/public/icons/svg/outline/specialties/orthopaedics.svg?raw';
import iconShieldPlus from 'healthicons/public/icons/svg/outline/specialties/oncology.svg?raw';
import iconGem from 'bootstrap-icons/icons/gem.svg?raw';
import iconDroplet from 'healthicons/public/icons/svg/outline/specialties/gynecology.svg?raw';
import iconDropletFill from 'healthicons/public/icons/svg/outline/body/kidneys.svg?raw';
import iconCapsule from 'healthicons/public/icons/svg/outline/body/tooth.svg?raw';
import iconEye from 'healthicons/public/icons/svg/outline/specialties/opthalmology.svg?raw';
import iconBrain from 'healthicons/public/icons/svg/outline/body/neurology.svg?raw';
import iconSpine from 'healthicons/public/icons/svg/outline/body/spine.svg?raw';
import iconStomach from 'healthicons/public/icons/svg/outline/body/stomach.svg?raw';
import iconKidney from 'healthicons/public/icons/svg/outline/specialties/urology.svg?raw';
import iconEarNoseThroat from 'healthicons/public/icons/svg/outline/specialties/ears_nose_and_throat.svg?raw';

/** Shared icon set for TreatmentData['icon'] — reused by TreatmentsGrid, treatment detail pages, and the Navbar's Treatments dropdown so they all stay visually consistent. */
export const treatmentIcons = {
	heart: iconHeart,
	activity: iconActivity,
	shieldPlus: iconShieldPlus,
	gem: iconGem,
	droplet: iconDroplet,
	dropletFill: iconDropletFill,
	capsule: iconCapsule,
	eye: iconEye,
	brain: iconBrain,
	spine: iconSpine,
	stomach: iconStomach,
	kidney: iconKidney,
	earNoseThroat: iconEarNoseThroat,
} as const;
