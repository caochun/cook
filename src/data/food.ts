export interface StuffItem {
  /**
   * 食材名称
   */
  name: string
  /**
   * 例如：🥔
   */
  emoji: string
  /**
   * 图片链接
   */
  image?: string
  /**
   * 别名，譬如：西红柿/番茄
   */
  alias?: string
  /**
   * 图标名称
   */
  icon?: string
  /**
   * 显示标签
   */
  label?: string
}

/**
 * 素菜
 */
export const vegetable: StuffItem[] = [
  {
    name: '土豆',
    emoji: '🥔',
    label: '土豆 Patato',
  },
  {
    label: '胡萝卜 Carrot',
    emoji: '🥕',
    name: '胡萝卜',
  },
  {
    name: '花菜',
    emoji: '🥦',
    label: '花菜 Broccoli',
  },
  {
    name: '白萝卜',
    emoji: '🥣',
    label: '白萝卜 Radish',
  },
  {
    name: '西葫芦',
    emoji: '🥒',
    label: '西葫芦 Zucchini',
  },
  {
    label: '番茄 Tomato',
    emoji: '🍅',
    name: '番茄',
    alias: '西红柿',
  },
  {
    label: '芹菜 Celery',
    emoji: '🥗',
    name: '芹菜',
  },
  {
    name: '黄瓜',
    emoji: '🥒',
    label: '黄瓜 Cucumber',
  },
  {
    name: '洋葱',
    emoji: '🧅',
    label: '洋葱 Onion',
  },
  {
    name: '莴笋',
    emoji: '🎍',
    label: '莴笋 Lettuce',
  },
  {
    name: '菌菇',
    emoji: '🍄',
    label: '菌菇 Mushroom',
    alias: '蘑菇',
  },
  {
    name: '茄子',
    emoji: '🍆',
    label: '茄子 Eggplant',
  },
  {
    name: '豆腐',
    emoji: '🍲',
    label: '豆腐 Tofu',
  },
  {
    name: '包菜',
    emoji: '🥬',
    alias: '白菜',
    label: '包菜 Cabbage',
  },
]

/**
 * 荤菜
 */
export const meat: StuffItem[] = [
  {
    name: '香肠',
    label: '香肠 Sausage',
    emoji: '🌭',
    alias: '腊肠',
  },
  {
    name: '鸡肉',
    emoji: '🐤',
    label: '鸡肉 Chicken',
  },
  {
    name: '猪肉',
    emoji: '🐷',
    label: '猪肉 Pork',
  },
  {
    label: '鸡蛋 Egg',
    emoji: '🥚',
    name: '鸡蛋',
  },
  {
    name: '虾',
    emoji: '🦐',
    label: '虾 Shrimp',
  },
  {
    name: '牛肉',
    emoji: '🐮',
    label: '牛肉 Beef',
  },
  {
    name: '鱼',
    emoji: '🐟',
    label: '鱼 Fish',
  },
]

/**
 * 主食
 */
export const staple: StuffItem[] = [
  {
    name: '面食',
    emoji: '🍝',
  },
  {
    name: '面包',
    emoji: '🍞',
  },
  {
    name: '米',
    emoji: '🍚',
  },
  {
    name: '方便面',
    emoji: '🍜',
  },
]

export const tools: StuffItem[] = [
  {
    name: '烤箱',
    emoji: '',
    icon: 'i-mdi-toaster-oven',
  },
  {
    name: '空气炸锅',
    emoji: '',
    icon: 'i-fe-frying-pan',
  },
  {
    name: '微波炉',
    emoji: '',
    icon: 'i-ic-outline-microwave',
  },
  {
    name: '电饭煲',
    emoji: '',
    icon: 'i-gg-smart-home-cooker',
  },
  {
    label: '一口能炒又能煮的大锅',
    name: '一口大锅',
    emoji: '',
    icon: 'i-mdi-pot-steam-outline',
  },
]
