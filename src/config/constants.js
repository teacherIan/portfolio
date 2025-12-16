// Responsive breakpoints
export const BREAKPOINTS = {
  SMALL_SCREEN: 1400,
  MOBILE: 1000,
};

// Player physics constants
export const PLAYER = {
  BALL_SIZE_DESKTOP: 11,
  BALL_SIZE_MOBILE: 14,
  SPEED_MULTIPLIER_DESKTOP: 1,
  SPEED_MULTIPLIER_MOBILE: 2,
  IMPULSE_STRENGTH_BASE: 30000,
  TORQUE_STRENGTH: 3000,
  JOYSTICK_MULTIPLIER: 1.3,
  GRAVITY_SCALE: 10,
  RESTITUTION: 0.2,
  FRICTION: 1,
  LINEAR_DAMPING: 0.5,
  ANGULAR_DAMPING: 0.5,
  SPAWN_DESKTOP: [17, 100, -68],
  SPAWN_MOBILE: [40, 100, -120],
};

// MainLoader constants
export const MAIN_LOADER = {
  CUBES_COUNT_DESKTOP: 700,
  CUBES_COUNT_MOBILE: 400,
  SPHERE_RADIUS: 1.55,
  RESTITUTION: 0.1,
};

// Camera settings
export const CAMERA = {
  FOV: 30,
  NEAR: 1,
  FAR: 2000,
  POSITION_DESKTOP: [0, 100, -250],
  POSITION_MOBILE: [0, 300, -500],
};

// Fog settings
export const FOG = {
  COLOR: '#50747c',
  NEAR: 120,
  FAR_DESKTOP: 500,
  FAR_MOBILE: 1100,
};

// Grid settings
export const GRID = {
  POSITION: [0, -9, 0],
  ARGS: [50, 50],
  CELL_COLOR: 'white',
  CELL_THICKNESS: 1,
  SECTION_SIZE: 100,
  CELL_SIZE: 50,
  SECTION_COLOR: '#ffffff',
  FADE_DISTANCE_DESKTOP: 500,
  FADE_DISTANCE_MOBILE: 700,
};

// Bowling pins positions (relative offsets)
export const BOWLING_PINS = {
  POSITION_X_DESKTOP: 154.2,
  POSITION_X_MOBILE: 116.5,
  POSITION_Y: -3.9,
  POSITION_Z_DESKTOP: -16,
  POSITION_Z_MOBILE: -53.5,
  ROTATION: -1.5,
  SCALE: 30,
};

// Physics gravity
export const PHYSICS = {
  GRAVITY: [0, -20, 0],
};

// Joystick settings
export const JOYSTICK = {
  SIZE_DESKTOP: 200,
  SIZE_MOBILE: 100,
  BASE_COLOR: '#50747caa',
  STICK_COLOR: '#b6161d',
};
