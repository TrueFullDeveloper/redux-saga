export const FEEDBACK_INSTANCES = ["TOUR", "USER", "STUDIO"];

export const feedbackEndpoints = Object.fromEntries(FEEDBACK_INSTANCES.map(item => [item, item]));
