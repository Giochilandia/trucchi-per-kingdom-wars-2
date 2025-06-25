/**
 * GiochilandiaBadge - Simple Badge/Achievement Manager
 * Author: Giochilandia
 * License: Custom
 */

class GiochilandiaBadge {
    constructor() {
        this.badges = new Set();
    }

    /**
     * Unlocks a badge by name.
     * @param {string} badgeName - Name of the badge to unlock.
     */
    unlock(badgeName) {
        if (typeof badgeName !== 'string' || badgeName.trim() === '') {
            console.error('[GiochilandiaBadge] Invalid badge name.');
            return;
        }
        if (this.badges.has(badgeName)) {
            console.log(`[GiochilandiaBadge] Badge "${badgeName}" already unlocked.`);
            return;
        }
        this.badges.add(badgeName);
        console.log(`[GiochilandiaBadge] Badge "${badgeName}" unlocked!`);
    }

    /**
     * Checks if a badge is unlocked.
     * @param {string} badgeName - Name of the badge.
     * @returns {boolean}
     */
    has(badgeName) {
        return this.badges.has(badgeName);
    }

    /**
     * Returns all unlocked badges.
     * @returns {string[]}
     */
    getAll() {
        return Array.from(this.badges);
    }
}

// Example usage:
// const badgeSystem = new GiochilandiaBadge();
// badgeSystem.unlock('First Win');
// badgeSystem.unlock('Explorer');
// console.log(badgeSystem.getAll()); // ["First Win", "Explorer"]

module.exports = GiochilandiaBadge;
