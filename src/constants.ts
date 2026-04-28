/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Hexagram {
  binary: string; // 6-digit binary (bottom to top)
  name: string;
  pinyin: string;
  meaning: string;
  chinese: string;
}

export const HEXAGRAMS: Record<string, Hexagram> = {
  "111111": { chinese: "乾", pinyin: "Qián", name: "The Creative", meaning: "Strength, heaven, power, persistence.", binary: "111111" },
  "000000": { chinese: "坤", pinyin: "Kūn", name: "The Receptive", meaning: "Field, earth, yielding, devotion.", binary: "000000" },
  "100010": { chinese: "屯", pinyin: "Zhūn", name: "Difficulty at the Beginning", meaning: "Sprouting, gathering strength, patience.", binary: "100010" },
  "010001": { chinese: "蒙", pinyin: "Méng", name: "Youthful Folly", meaning: "Enlightening, learning, childhood.", binary: "010001" },
  "111010": { chinese: "需", pinyin: "Xū", name: "Waiting", meaning: "Nourishment, timing, patience.", binary: "111010" },
  "010111": { chinese: "讼", pinyin: "Sòng", name: "Conflict", meaning: "Arguing, seeking justice, caution.", binary: "010111" },
  "010000": { chinese: "师", pinyin: "Shī", name: "The Army", meaning: "Leadership, organization, discipline.", binary: "010000" },
  "000010": { chinese: "比", pinyin: "Bǐ", name: "Holding Together", meaning: "Union, coordination, alliance.", binary: "000010" },
  "111011": { chinese: "小畜", pinyin: "Xiǎo Xù", name: "Small Taming", meaning: "Accumulation, gentle persuasion.", binary: "111011" },
  "110111": { chinese: "履", pinyin: "Lǚ", name: "Treading", meaning: "Conduct, manners, caution.", binary: "110111" },
  "111000": { chinese: "泰", pinyin: "Tài", name: "Peace", meaning: "Prosperity, balance, harmony.", binary: "111000" },
  "000111": { chinese: "否", pinyin: "Pǐ", name: "Stagnation", meaning: "Obstruction, separation, earth over heaven.", binary: "000111" },
  "101111": { chinese: "同人", pinyin: "Tóng Rén", name: "Fellowship", meaning: "Union of people, universal love.", binary: "101111" },
  "111101": { chinese: "大有", pinyin: "Dà Yǒu", name: "Great Possession", meaning: "Abundance, success, clarity.", binary: "111101" },
  "000100": { chinese: "谦", pinyin: "Qiān", name: "Modesty", meaning: "Humility, balance, inner strength.", binary: "000100" },
  "001000": { chinese: "豫", pinyin: "Yù", name: "Enthusiasm", meaning: "Joy, movement, anticipation.", binary: "001000" },
  "100110": { chinese: "随", pinyin: "Suí", name: "Following", meaning: "Adaptability, joyful movement.", binary: "100110" },
  "011001": { chinese: "蛊", pinyin: "Gǔ", name: "Work on Corruption", meaning: "Restoration, fixing the old.", binary: "011001" },
  "110000": { chinese: "临", pinyin: "Lín", name: "Approach", meaning: "Arriving, growth, supervision.", binary: "110000" },
  "000011": { chinese: "观", pinyin: "Guān", name: "Contemplation", meaning: "Observation, vision, looking down.", binary: "000011" },
  "100101": { chinese: "噬嗑", pinyin: "Shì Kè", name: "Biting Through", meaning: "Justice, action, removing obstacles.", binary: "100101" },
  "101001": { chinese: "贲", pinyin: "Bì", name: "Grace", meaning: "Elegance, appearance, simplicity.", binary: "101001" },
  "000001": { chinese: "剥", pinyin: "Bō", name: "Splitting Apart", meaning: "Decay, disintegration, falling.", binary: "000001" },
  "100000": { chinese: "复", pinyin: "Fù", name: "Return", meaning: "New beginning, recovery, winter solstice.", binary: "100000" },
  "100111": { chinese: "无妄", pinyin: "Wú Wàng", name: "Innocence", meaning: "Unexpectedness, sincerity, correctness.", binary: "100111" },
  "111001": { chinese: "大畜", pinyin: "Dà Xù", name: "Great Taming", meaning: "Accumulation of wisdom, storage.", binary: "111001" },
  "100001": { chinese: "颐", pinyin: "Yí", name: "Mouth", meaning: "Nourishment, care, words.", binary: "100001" },
  "011110": { chinese: "大过", pinyin: "Dà Guò", name: "Great Excess", meaning: "Critical mass, breaking point.", binary: "011110" },
  "010010": { chinese: "坎", pinyin: "Kǎn", name: "The Abysmal", meaning: "Water, danger, inner sincerity.", binary: "010010" },
  "101101": { chinese: "离", pinyin: "Lí", name: "The Clinging", meaning: "Fire, clarity, awareness.", binary: "101101" },
  "001110": { chinese: "咸", pinyin: "Xián", name: "Influence", meaning: "Attraction, mutual sensitivity.", binary: "001110" },
  "011100": { chinese: "恒", pinyin: "Héng", name: "Duration", meaning: "Constancy, endurance, stability.", binary: "011100" },
  "001111": { chinese: "遁", pinyin: "Dùn", name: "Retreat", meaning: "Strategic withdrawal, distancing.", binary: "001111" },
  "111100": { chinese: "大壮", pinyin: "Dà Zhuàng", name: "Great Power", meaning: "Thunder in the sky, momentum.", binary: "111100" },
  "000101": { chinese: "晋", pinyin: "Jìn", name: "Progress", meaning: "Rising, clarification, promotion.", binary: "000101" },
  "101000": { chinese: "明夷", pinyin: "Míng Yí", name: "Darkening of the Light", meaning: "Inner light preserved in danger.", binary: "101000" },
  "101011": { chinese: "家人", pinyin: "Jiā Rén", name: "The Family", meaning: "Domesticity, structure, nurturing.", binary: "101011" },
  "110101": { chinese: "睽", pinyin: "Kuí", name: "Opposition", meaning: "Mismatch, creativity via difference.", binary: "110101" },
  "001010": { chinese: "蹇", pinyin: "Jiǎn", name: "Obstruction", meaning: "Difficulty, turning back for aid.", binary: "001010" },
  "010100": { chinese: "解", pinyin: "Xiè", name: "Deliverance", meaning: "Release, liberation, resolution.", binary: "010100" },
  "110001": { chinese: "损", pinyin: "Sǔn", name: "Decrease", meaning: "Restraint, foundational gain.", binary: "110001" },
  "100011": { chinese: "益", pinyin: "Yì", name: "Increase", meaning: "Expansion, benefit, altruism.", binary: "100011" },
  "111110": { chinese: "夬", pinyin: "Guài", name: "Resoluteness", meaning: "Breakthrough, decisiveness.", binary: "111110" },
  "011111": { chinese: "姤", pinyin: "Gòu", name: "Coming to Meet", meaning: "Temptation, meeting of forces.", binary: "011111" },
  "000110": { chinese: "萃", pinyin: "Cuì", name: "Gathering Together", meaning: "Congregation, collective force.", binary: "000110" },
  "011000": { chinese: "升", pinyin: "Shēng", name: "Pushing Upward", meaning: "Effort, steady progress.", binary: "011000" },
  "010110": { chinese: "困", pinyin: "Kùn", name: "Oppression", meaning: "Exhaustion, confined, test of character.", binary: "010110" },
  "011010": { chinese: "井", pinyin: "Jǐng", name: "The Well", meaning: "Source, reliability, constant truth.", binary: "011010" },
  "101110": { chinese: "革", pinyin: "Gé", name: "Revolution", meaning: "Change, transformation, timing.", binary: "101110" },
  "011101": { chinese: "鼎", pinyin: "Dǐng", name: "The Cauldron", meaning: "Alchemy, spiritual nourishment.", binary: "011101" },
  "100100": { chinese: "震", pinyin: "Zhèn", name: "The Arousing", meaning: "Thunder, shock, awakening.", binary: "100100" },
  "001001": { chinese: "艮", pinyin: "Gèn", name: "Keeping Still", meaning: "Mountain, meditation, resting.", binary: "001001" },
  "001011": { chinese: "渐", pinyin: "Jiàn", name: "Development", meaning: "Gradual progress, marriage.", binary: "001011" },
  "110100": { chinese: "归妹", pinyin: "Guī Mèi", name: "The Marrying Maiden", meaning: "Impulse versus protocol.", binary: "110100" },
  "101100": { chinese: "丰", pinyin: "Fēng", name: "Abundance", meaning: "Zenith, clarity and action.", binary: "101100" },
  "001101": { chinese: "旅", pinyin: "Lǚ", name: "The Wanderer", meaning: "Separation, temporary home.", binary: "001101" },
  "011011": { chinese: "巽", pinyin: "Xùn", name: "The Gentle", meaning: "Wind, wood, penetration.", binary: "011011" },
  "110110": { chinese: "兑", pinyin: "Duì", name: "The Joyous", meaning: "Lake, communication, openness.", binary: "110110" },
  "010011": { chinese: "涣", pinyin: "Huàn", name: "Dispersion", meaning: "Resolving stiffness, spiritual flow.", binary: "010011" },
  "110010": { chinese: "节", pinyin: "Jié", name: "Limitation", meaning: "Discipline, proper bounds.", binary: "110010" },
  "110011": { chinese: "中孚", pinyin: "Zhōng Fú", name: "Inner Truth", meaning: "Heart-to-heart, trust.", binary: "110011" },
  "001100": { chinese: "小过", pinyin: "Xiǎo Guò", name: "Preponderance of the Small", meaning: "Low profile, simple duties.", binary: "001100" },
  "101010": { chinese: "既济", pinyin: "Jì Jì", name: "After Completion", meaning: "Order, maintenance, caution.", binary: "101010" },
  "010101": { chinese: "未济", pinyin: "Wèi Jì", name: "Before Completion", meaning: "Potential, anticipation.", binary: "010101" },
};
