export interface Rod {
  id: string
  name: string
  series: string
  tagline: string
  description: string
  longDescription: string
  price: number
  length: string
  weight: string
  lineWeight: string
  pieces: number
  action: string
  material: string
  image: string
  accent: string
  features: string[]
  idealFor: string
}

export const rods: Rod[] = [
  {
    id: 'heritage-7',
    name: 'Heritage 7\'6"',
    series: 'Heritage Series',
    tagline: 'Where tradition meets the current',
    description:
      'Our flagship bamboo rod, split from premium Tonkin cane and hand-planed to tolerances measured in thousandths. The Heritage carries forward a century of rod-building wisdom.',
    longDescription:
      'Each Heritage rod begins as a culm of hand-selected Tonkin bamboo, flame-tempered over an open hearth, then split into strips that are planed by hand to within two-thousandths of an inch. The tapered action loads deep into the mid-section, delivering the kind of smooth, unhurried casting stroke that turns a morning on the water into meditation. Fitted with oxidized nickel-silver ferrules, an agate stripping guide, and a hand-shaped cork grip from premium Portuguese bark. The reel seat is bird\'s-eye maple with a reverse-locking mechanism.',
    price: 1850,
    length: '7\'6"',
    weight: '4.2 oz',
    lineWeight: '4wt',
    pieces: 2,
    action: 'Medium',
    material: 'Tonkin Bamboo',
    image: '🎋',
    accent: '#8B9E7C',
    features: [
      'Hand-split Tonkin cane, flame-tempered',
      'Nickel-silver ferrules, oxidized finish',
      'Agate stripping guide',
      'Portuguese cork grip, hand-shaped',
      'Bird\'s-eye maple reel seat',
      'Includes cloth rod bag & aluminum tube',
    ],
    idealFor: 'Small to medium freestone streams. Delicate dry fly presentations on spring creeks.',
  },
  {
    id: 'meadow-creek',
    name: 'Meadow Creek',
    series: 'Glass Series',
    tagline: 'Slow down. Feel everything.',
    description:
      'A fiberglass rod for anglers who measure a day not in fish caught but in casts made. The Meadow Creek loads at close range and forgives everything.',
    longDescription:
      'The Meadow Creek is built on a custom S-glass blank that we taper in-house, wrapping layer by layer to achieve a progressive action that loads with just fifteen feet of line in the air. This is a rod for the intimate water — the brushy meadow creek where a roll cast under overhanging willows is worth more than a hundred-foot hero cast. Thread wraps in sage and copper, finished with multiple coats of hand-rubbed spar varnish. The grip is shaped from a single piece of super-grade cork with a subtle wells profile that disappears in your hand.',
    price: 1200,
    length: '6\'9"',
    weight: '3.1 oz',
    lineWeight: '3wt',
    pieces: 2,
    action: 'Slow',
    material: 'S-Glass',
    image: '🌿',
    accent: '#A3B18A',
    features: [
      'Custom-tapered S-glass blank',
      'Progressive slow action',
      'Sage & copper thread wraps',
      'Hand-rubbed spar varnish finish',
      'Super-grade cork wells grip',
      'Includes canvas rod sleeve & tube',
    ],
    idealFor: 'Small meadow streams, brook trout water, close-range dry fly fishing.',
  },
  {
    id: 'high-country',
    name: 'High Country',
    series: 'Expedition Series',
    tagline: 'Built for the water beyond the trail',
    description:
      'A 4-piece pack rod that breaks down to fit inside your pack but casts like it never left the bench. Graphite and bamboo, together.',
    longDescription:
      'The High Country was born from our own backcountry trips — days when we hiked miles past the last bridge to find water that hadn\'t seen a fly in weeks. The blank is a hybrid construction: a high-modulus graphite core wrapped with a bamboo veneer strip at the butt section, giving it the sensitivity of cane with the durability trail rods demand. Four-piece construction with precision-machined aluminum ferrules that seat with a satisfying click. The reel seat is anodized aluminum with a wooden insert, and the grip is shaped from Flor-grade cork.',
    price: 1450,
    length: '8\'0"',
    weight: '3.6 oz',
    lineWeight: '5wt',
    pieces: 4,
    action: 'Medium-Fast',
    material: 'Graphite / Bamboo Hybrid',
    image: '🏔️',
    accent: '#7A9AAE',
    features: [
      'Graphite core with bamboo veneer',
      'Precision aluminum ferrules',
      '4-piece for easy packing',
      'Anodized reel seat with wood insert',
      'Flor-grade cork grip',
      'Includes waxed canvas rod case',
    ],
    idealFor: 'Backcountry streams, alpine lakes, wilderness fishing where packability matters.',
  },
  {
    id: 'freestone',
    name: 'Freestone',
    series: 'Heritage Series',
    tagline: 'The all-water rod',
    description:
      'Our most versatile bamboo rod. The Freestone handles everything from size-20 midges to bushy hoppers, from pocket water to long pool tailouts.',
    longDescription:
      'If you could only own one bamboo rod, this would be the one. The Freestone\'s taper was developed over three years of field testing on rivers from the Driftless to the White Mountains. It carries a 5-weight line with authority but still protects 6X tippet when a big brown decides to run. The blank is built from heat-treated Tonkin cane with a medium action that flexes into the grip on a full cast but has enough backbone to turn fish out of structure. Appointments include blued-steel snake guides, an uplocking walnut reel seat, and a cigar-shaped grip of premium cork.',
    price: 1950,
    length: '8\'0"',
    weight: '4.8 oz',
    lineWeight: '5wt',
    pieces: 2,
    action: 'Medium',
    material: 'Tonkin Bamboo',
    image: '🎣',
    accent: '#C4704B',
    features: [
      'Three-year field-tested taper',
      'Heat-treated Tonkin cane',
      'Blued-steel snake guides',
      'Uplocking walnut reel seat',
      'Premium cigar-shaped cork grip',
      'Includes leather-capped aluminum tube',
    ],
    idealFor: 'Versatile all-around trout fishing. Dries, nymphs, and small streamers.',
  },
  {
    id: 'spring-creek',
    name: 'Spring Creek',
    series: 'Heritage Series',
    tagline: 'Whisper cast. Glass-smooth drift.',
    description:
      'Purpose-built for technical spring creek fishing where leader-shy trout demand impossibly delicate presentations and drag-free drifts.',
    longDescription:
      'The Spring Creek is our most refined taper — a rod for anglers who have graduated from catching fish to the art of presentation. Built specifically for long, fine leaders and tiny flies, this rod turns over a 12-foot 7X leader like it\'s nothing, placing a size-22 comparadun in a dinner-plate-sized feeding lane at forty feet. The extra-slow tip section absorbs the shock of light tippet while the powerful mid-section generates line speed without effort. Fitted with titanium-frame guides to save weight, a butternut reel seat, and our signature half-wells grip.',
    price: 2200,
    length: '7\'9"',
    weight: '3.9 oz',
    lineWeight: '3wt',
    pieces: 2,
    action: 'Slow-Medium',
    material: 'Tonkin Bamboo',
    image: '💧',
    accent: '#9E8B6E',
    features: [
      'Ultra-refined presentation taper',
      'Titanium-frame guides',
      'Extra-slow tip for light tippet',
      'Butternut reel seat',
      'Signature half-wells cork grip',
      'Includes silk rod bag & brass tube',
    ],
    idealFor: 'Technical spring creeks, educated trout, tiny dry flies, ultra-light tippet.',
  },
  {
    id: 'backcountry-glass',
    name: 'Backcountry Glass',
    series: 'Glass Series',
    tagline: 'Three pieces. Zero compromises.',
    description:
      'A 3-piece fiberglass travel rod that proves pack rods don\'t have to cast like pack rods. Perfect for the angler who fishes everywhere.',
    longDescription:
      'We designed the Backcountry Glass for the angler whose fishing bag is always in the trunk. At 7 feet in three pieces, it fits in a carry-on, a bike pannier, or a day pack. The E-glass blank has a surprisingly crisp action for fiberglass — fast enough to punch into a headwind but with the classic glass forgiveness on the backcast. Thread wraps in forest and cream, with a fighting butt for the unexpected. Cork-and-rings grip, nickel-silver ferrules, and a rosewood reel seat spacer make this a rod you\'ll be proud to pull out at any tailwater.',
    price: 1100,
    length: '7\'0"',
    weight: '3.4 oz',
    lineWeight: '4wt',
    pieces: 3,
    action: 'Medium',
    material: 'E-Glass',
    image: '🌲',
    accent: '#D4C9A8',
    features: [
      'Custom E-glass blank',
      'Crisp-for-glass action',
      '3-piece travel-friendly design',
      'Forest & cream thread wraps',
      'Rosewood reel seat spacer',
      'Includes cordura travel case',
    ],
    idealFor: 'Travel fishing, everyday carry, small to medium rivers, versatile situations.',
  },
]

export function getRodById(id: string): Rod | undefined {
  return rods.find((r) => r.id === id)
}
