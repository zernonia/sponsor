import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'zernonia',
    type: 'user',
  },

  outputDir: './sponsorkit',
  width: 800,

  // Tiers are matched by `monthlyDollars` as an inclusive lower bound,
  // and must be listed in ascending order.
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      // The default tier — sponsors that don't match any tier below.
      title: 'Backers',
      preset: tierPresets.base,
    },
    {
      title: 'Generous Backers',
      monthlyDollars: 20,
      preset: tierPresets.medium,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 250,
      preset: tierPresets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 500,
      preset: tierPresets.xl,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 1000,
      preset: tierPresets.xl,
    },
  ],

  renders: [
    {
      name: 'sponsors',
      formats: ['svg', 'png', 'json'],
    },
    {
      name: 'sponsors.wide',
      width: 1200,
      formats: ['svg'],
    },
    {
      name: 'sponsors.circles',
      renderer: 'circles',
      width: 600,
      formats: ['svg'],
    },
  ],
})
