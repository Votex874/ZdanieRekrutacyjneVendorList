export const mock = {
    vendorListVersion: 192,
    lastUpdated: '2020-03-05T16:00:50Z',
    purposes: [
      {
        id: 1,
        name: 'Information storage and access',
        description: 'The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies.'
      },
      {
        id: 2,
        name: 'Personalisation',
        description: 'The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content.'
      },
      {
        id: 3,
        name: 'Ad selection, delivery, reporting',
        description: 'The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time.'
      },
      {
        id: 4,
        name: 'Content selection, delivery, reporting',
        description: 'The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time.'
      },
      {
        id: 5,
        name: 'Measurement',
        description: 'The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time.'
      }
    ],
    features: [
      {
        id: 1,
        name: 'Matching Data to Offline Sources',
        description: 'Combining data from offline sources that were initially collected in other contexts.'
      },
      {
        id: 2,
        name: 'Linking Devices',
        description: 'Allow processing of a user\'s data to connect such user across multiple devices.'
      },
      {
        id: 3,
        name: 'Precise Geographic Location Data',
        description: 'Allow processing of a user\'s precise geographic location data in support of a purpose for which that certain third party has consent.'
      }
    ],
    vendors: [
      {
        id: 8,
        name: 'Emerse Sverige AB',
        purposeIds: [
          1,
          2,
          4
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.emerse.com/privacy-policy/'
      },
      {
        id: 9,
        name: 'AdMaxim Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.admaxim.com/admaxim-privacy-policy/'
      },
      {
        id: 12,
        name: 'BeeswaxIO Corporation',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.beeswax.com/privacy/'
      },
      {
        id: 28,
        name: 'TripleLift, Inc.',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://triplelift.com/privacy/'
      },
      {
        id: 27,
        name: 'ADventori SAS',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.adventori.com/with-us/legal-notice/'
      },
      {
        id: 25,
        name: 'Oath (EMEA) Limited',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://policies.oath.com/ie/en/oath/privacy/index.html'
      },
      {
        id: 26,
        name: 'Venatus Media Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.venatusmedia.com/privacy/'
      },
      {
        id: 1,
        name: 'Exponential Interactive, Inc',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://exponential.com/privacy'
      },
      {
        id: 6,
        name: 'AdSpirit GmbH',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.adspirit.de/privacy'
      },
      {
        id: 30,
        name: 'BidTheatre AB',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.bidtheatre.com/privacy-policy'
      },
      {
        id: 24,
        name: 'Conversant Europe Ltd.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.conversantmedia.eu/legal/privacy-policy'
      },
      {
        id: 29,
        name: 'Etarget SE',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.etarget.sk/privacy.php'
      },
      {
        id: 39,
        name: 'ADITION technologies AG',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.adition.com/datenschutz'
      },
      {
        id: 11,
        name: 'Quantcast International Limited',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.quantcast.com/privacy/'
      },
      {
        id: 15,
        name: 'Adikteev / Emoteev',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.adikteev.com/privacy-policy-eng/'
      },
      {
        id: 4,
        name: 'Roq.ad GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.roq.ad/privacy-policy'
      },
      {
        id: 7,
        name: 'Vibrant Media Limited',
        purposeIds: [
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://www.vibrantmedia.com/en/privacy-policy/'
      },
      {
        id: 2,
        name: 'Captify Technologies Limited',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.captify.co.uk/privacy-policy/'
      },
      {
        id: 37,
        name: 'NEURAL.ONE',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://web.neural.one/privacy-policy/'
      },
      {
        id: 13,
        name: 'Sovrn Holdings Inc',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.sovrn.com/sovrn-privacy/'
      },
      {
        id: 34,
        name: 'NEORY GmbH',
        purposeIds: [
          1,
          2,
          4,
          5
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'https://www.neory.com/privacy.html'
      },
      {
        id: 32,
        name: 'AppNexus Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.appnexus.com/en/company/platform-privacy-policy'
      },
      {
        id: 10,
        name: 'Index Exchange, Inc. ',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.indexexchange.com/privacy'
      },
      {
        id: 57,
        name: 'ADARA MEDIA UNLIMITED',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://adara.com/privacy-promise/'
      },
      {
        id: 63,
        name: 'Avocet Systems Limited',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3
        ],
        featureIds: [],
        policyUrl: 'http://www.avocet.io/privacy-policy'
      },
      {
        id: 51,
        name: 'xAd, Inc. dba GroundTruth',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.groundtruth.com/privacy-policy/'
      },
      {
        id: 49,
        name: 'Tradelab, SAS',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://tradelab.com/en/privacy/'
      },
      {
        id: 45,
        name: 'Smart Adserver',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://smartadserver.com/end-user-privacy-policy/'
      },
      {
        id: 52,
        name: 'The Rubicon Project, Inc. ',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.rubiconproject.com/rubicon-project-yield-optimization-privacy-policy/'
      },
      {
        id: 71,
        name: 'Dataxu, Inc. ',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.dataxu.com/about-us/privacy/data-collection-platform/'
      },
      {
        id: 79,
        name: 'MediaMath, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.mediamath.com/privacy-policy/'
      },
      {
        id: 91,
        name: 'Criteo SA',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.criteo.com/privacy/'
      },
      {
        id: 85,
        name: 'Crimtan Holdings Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://crimtan.com/privacy/'
      },
      {
        id: 16,
        name: 'RTB House S.A.',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.rtbhouse.com/privacy-center/services-privacy-policy/'
      },
      {
        id: 86,
        name: 'Scene Stealer Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://scenestealer.tv/privacy-policy/'
      },
      {
        id: 94,
        name: 'Blis Media Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.blis.com/privacy/'
      },
      {
        id: 73,
        name: 'Simplifi Holdings Inc.',
        purposeIds: [
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://simpli.fi/site-privacy-policy/'
      },
      {
        id: 33,
        name: 'ShareThis, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.sharethis.com/privacy/'
      },
      {
        id: 20,
        name: 'N Technologies Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://n.rich/privacy-notice'
      },
      {
        id: 55,
        name: 'Madison Logic, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.madisonlogic.com/privacy/'
      },
      {
        id: 53,
        name: 'Sirdata',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.sirdata.com/privacy/'
      },
      {
        id: 69,
        name: 'OpenX',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.openx.com/legal/privacy-policy/'
      },
      {
        id: 98,
        name: 'GroupM UK Limited',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.groupm.com/privacy-notice'
      },
      {
        id: 62,
        name: 'Justpremium BV',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://justpremium.com/privacy-policy/'
      },
      {
        id: 19,
        name: 'Intent Media, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://intentmedia.com/privacy-policy/'
      },
      {
        id: 43,
        name: 'Vdopia DBA Chocolate Platform',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://chocolateplatform.com/privacy-policy/',
        deletedDate: '2019-08-06T00:00:00Z'
      },
      {
        id: 36,
        name: 'RhythmOne LLC',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.rhythmone.com/privacy-policy'
      },
      {
        id: 80,
        name: 'Sharethrough, Inc',
        purposeIds: [
          3,
          5
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://platform-cdn.sharethrough.com/privacy-policy'
      },
      {
        id: 81,
        name: 'PulsePoint, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.pulsepoint.com/privacy-policy/website'
      },
      {
        id: 23,
        name: 'Amobee, Inc. ',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.amobee.com/trust/privacy-guidelines'
      },
      {
        id: 35,
        name: 'Purch Group, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.purch.com/privacy-policy/',
        deletedDate: '2019-05-30T00:00:00Z'
      },
      {
        id: 67,
        name: 'LifeStreet Corporation',
        purposeIds: [
          1,
          4,
          5
        ],
        legIntPurposeIds: [
          2
        ],
        featureIds: [],
        policyUrl: 'http://www.lifestreet.com/privacy/',
        deletedDate: '2019-05-30T00:00:00Z'
      },
      {
        id: 3,
        name: 'affilinet',
        purposeIds: [
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.affili.net/de/footeritem/datenschutz',
        deletedDate: '2019-06-21T00:00:00Z'
      },
      {
        id: 74,
        name: 'Admotion SRL',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.admotion.com/policy/',
        deletedDate: '2019-07-24T00:00:00Z'
      },
      {
        id: 191,
        name: 'realzeit GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://realzeitmedia.com/privacy.html',
        deletedDate: '2019-04-29T00:00:00Z'
      },
      {
        id: 197,
        name: 'Switch Concepts Limited',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.switchconcepts.com/privacy-policy',
        deletedDate: '2019-07-26T00:00:00Z'
      },
      {
        id: 390,
        name: 'Parsec Media Inc.',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'www.parsec.media/privacy-policy',
        deletedDate: '2019-06-27T00:00:00Z'
      },
      {
        id: 459,
        name: 'uppr GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          5
        ],
        featureIds: [],
        policyUrl: 'https://netzwerk.uppr.de/privacy-policy.do',
        deletedDate: '2019-06-17T00:00:00Z'
      },
      {
        id: 221,
        name: 'LEMO MEDIA GROUP LIMITED',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.lemomedia.com/terms.pdf',
        deletedDate: '2019-06-28T00:00:00Z'
      },
      {
        id: 478,
        name: 'RevLifter Ltd',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2
        ],
        featureIds: [],
        policyUrl: 'https://www.revlifter.com/privacy-policy',
        deletedDate: '2019-07-15T00:00:00Z'
      },
      {
        id: 500,
        name: 'Turbo',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://www.turboadv.com/white-rabbit-privacy-policy/',
        deletedDate: '2019-07-12T00:00:00Z'
      },
      {
        id: 68,
        name: 'Sizmek',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.sizmek.com/privacy-policy/'
      },
      {
        id: 75,
        name: 'M32 Connect Inc',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://m32.media/privacy-cookie-policy/'
      },
      {
        id: 17,
        name: 'Greenhouse Group BV (with its trademark LemonPI)',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.lemonpi.io/privacy-policy/',
        deletedDate: '2019-08-06T00:00:00Z'
      },
      {
        id: 61,
        name: 'GumGum, Inc.',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://gumgum.com/privacy-policy'
      },
      {
        id: 40,
        name: 'Active Agent AG',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.active-agent.com/de/unternehmen/datenschutzerklaerung/'
      },
      {
        id: 76,
        name: 'PubMatic, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://pubmatic.com/privacy-policy/'
      },
      {
        id: 89,
        name: 'Tapad, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.tapad.com/eu-privacy-policy'
      },
      {
        id: 46,
        name: 'Skimbit Ltd',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://skimlinks.com/pages/privacy-policy'
      },
      {
        id: 66,
        name: 'adsquare GmbH',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.adsquare.com/privacy'
      },
      {
        id: 105,
        name: 'Impression Desk Technologies Limited',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://impressiondesk.com/privacy-policy/',
        deletedDate: '2019-08-06T00:00:00Z'
      },
      {
        id: 41,
        name: 'Adverline',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3
        ],
        featureIds: [],
        policyUrl: 'https://www.adverline.com/privacy/'
      },
      {
        id: 82,
        name: 'Smaato, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.smaato.com/privacy/'
      },
      {
        id: 60,
        name: 'Rakuten Marketing LLC',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://rakutenmarketing.com/legal-notices/services-privacy-policy'
      },
      {
        id: 70,
        name: 'Yieldlab AG',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3
        ],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.yieldlab.de/meta-navigation/datenschutz/'
      },
      {
        id: 50,
        name: 'Adform A/S',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://site.adform.com/privacy-policy-opt-out/'
      },
      {
        id: 48,
        name: 'NetSuccess, s.r.o.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.inres.sk/pp/'
      },
      {
        id: 100,
        name: 'Fifty Technology Limited',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://fifty.io/privacy-policy.php'
      },
      {
        id: 21,
        name: 'The Trade Desk',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.thetradedesk.com/general/privacy-policy'
      },
      {
        id: 110,
        name: 'Hottraffic BV (DMA Institute)',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.dma-institute.com/privacy-compliancy/'
      },
      {
        id: 42,
        name: 'Taboola Europe Limited',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.taboola.com/privacy-policy'
      },
      {
        id: 112,
        name: 'Maytrics GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://maytrics.com/privacy.php',
        deletedDate: '2019-09-17T00:00:00Z'
      },
      {
        id: 77,
        name: 'comScore, Inc.',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.comscore.com/About-comScore/Privacy-Policy'
      },
      {
        id: 109,
        name: 'LoopMe Limited',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://loopme.com/privacy-policy/'
      },
      {
        id: 120,
        name: 'Eyeota Ptd Ltd',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.eyeota.com/privacy-policy/'
      },
      {
        id: 93,
        name: 'Adloox SA',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'http://adloox.com/disclaimer'
      },
      {
        id: 132,
        name: 'Teads ',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://teads.tv/privacy-policy/'
      },
      {
        id: 22,
        name: 'admetrics GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://admetrics.io/en/privacy_policy/'
      },
      {
        id: 102,
        name: 'SlimCut Media SAS',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'http://www.slimcutmedia.com/privacy-policy/'
      },
      {
        id: 108,
        name: 'Rich Audience',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://richaudience.com/privacy/'
      },
      {
        id: 18,
        name: 'Widespace AB',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.widespace.com/legal/privacy-policy-notice/'
      },
      {
        id: 122,
        name: 'Avid Media Ltd',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.avidglobalmedia.eu/privacy-policy.html'
      },
      {
        id: 97,
        name: 'LiveRamp, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.liveramp.com/service-privacy-policy/'
      },
      {
        id: 138,
        name: 'ConnectAd Realtime GmbH',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'http://connectadrealtime.com/privacy/'
      },
      {
        id: 72,
        name: 'Nano Interactive GmbH',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.nanointeractive.com/privacy'
      },
      {
        id: 127,
        name: 'PIXIMEDIA SAS',
        purposeIds: [
          1,
          2,
          4
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://piximedia.com/privacy/'
      },
      {
        id: 136,
        name: 'Ströer SSP GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.stroeer.de/fileadmin/de/Konvergenz_und_Konzepte/Daten_und_Technologien/Stroeer_SSP/Downloads/Datenschutz_Stroeer_SSP.pdf'
      },
      {
        id: 111,
        name: 'ShowHeroes GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'http://showheroes.com/privacy'
      },
      {
        id: 56,
        name: 'Confiant Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.confiant.com/privacy'
      },
      {
        id: 124,
        name: 'Teemo SA',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://teemo.co/fr/confidentialite/'
      },
      {
        id: 154,
        name: 'YOC AG',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://yoc.com/privacy/'
      },
      {
        id: 38,
        name: 'Beemray Oy',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.beemray.com/privacy-policy/'
      },
      {
        id: 101,
        name: 'MiQ',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://wearemiq.com/privacy-policy/'
      },
      {
        id: 149,
        name: 'ADman Interactive SL',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://admanmedia.com/politica.html?setLng=es'
      },
      {
        id: 151,
        name: 'Admedo Ltd',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.admedo.com/privacy-policy'
      },
      {
        id: 153,
        name: 'MADVERTISE MEDIA',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://madvertise.com/en/gdpr/'
      },
      {
        id: 159,
        name: 'Underdog Media LLC ',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://underdogmedia.com/privacy-policy/'
      },
      {
        id: 157,
        name: 'Seedtag Advertising S.L',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.seedtag.com/en/privacy-policy/'
      },
      {
        id: 145,
        name: 'Snapsort Inc., operating as Sortable',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://help.sortable.com/help/privacy-policy'
      },
      {
        id: 131,
        name: 'ID5 Technology SAS',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.id5.io/privacy'
      },
      {
        id: 158,
        name: 'Reveal Mobile, Inc',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://revealmobile.com/privacy'
      },
      {
        id: 147,
        name: 'Adacado Technologies Inc. (DBA Adacado)',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.adacado.com/privacy-policy-april-25-2018/'
      },
      {
        id: 130,
        name: 'NextRoll, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.nextroll.com/privacy'
      },
      {
        id: 129,
        name: 'IPONWEB GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.iponweb.com/privacy-policy/'
      },
      {
        id: 128,
        name: 'BIDSWITCH GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.bidswitch.com/privacy-policy/'
      },
      {
        id: 168,
        name: 'EASYmedia GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://login.rtbmarket.com/gdpr'
      },
      {
        id: 164,
        name: 'Outbrain UK Ltd',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.outbrain.com/legal/privacy#privacy-policy'
      },
      {
        id: 144,
        name: 'district m inc.',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://districtm.net/en/page/platforms-data-and-privacy-policy/'
      },
      {
        id: 163,
        name: 'Bombora Inc.',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://bombora.com/privacy'
      },
      {
        id: 173,
        name: 'Yieldmo, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.yieldmo.com/privacy/'
      },
      {
        id: 88,
        name: 'TreSensa, Inc.',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [
          2,
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.tresensa.com/eu-privacy'
      },
      {
        id: 78,
        name: 'Flashtalking, Inc.',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.flashtalking.com/privacypolicy/'
      },
      {
        id: 59,
        name: 'Sift Media, Inc',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.sift.co/privacy'
      },
      {
        id: 114,
        name: 'Sublime',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'http://ayads.co/privacy.php'
      },
      {
        id: 175,
        name: 'FORTVISION',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://fortvision.com/POC/index.html',
        deletedDate: '2019-08-09T00:00:00Z'
      },
      {
        id: 133,
        name: 'digitalAudience',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://digitalaudience.io/legal/privacy-cookies/'
      },
      {
        id: 14,
        name: 'Adkernel LLC',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://adkernel.com/privacy-policy/'
      },
      {
        id: 180,
        name: 'Thirdpresence Oy',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.thirdpresence.com/privacy',
        deletedDate: '2019-10-02T00:00:00Z'
      },
      {
        id: 183,
        name: 'EMX Digital LLC',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://emxdigital.com/privacy/'
      },
      {
        id: 58,
        name: '33Across',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.33across.com/privacy-policy'
      },
      {
        id: 140,
        name: 'Platform161',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://platform161.com/cookie-and-privacy-policy/'
      },
      {
        id: 90,
        name: 'Teroa S.A.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.e-planning.net/en/privacy.html'
      },
      {
        id: 141,
        name: '1020, Inc. dba Placecast and Ericsson Emodo',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.emodoinc.com/privacy-policy/'
      },
      {
        id: 142,
        name: 'Media.net Advertising FZ-LLC',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.media.net/en/privacy-policy'
      },
      {
        id: 209,
        name: 'Delta Projects AB',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://deltaprojects.com/privacy-policy/'
      },
      {
        id: 195,
        name: 'advanced store GmbH',
        purposeIds: [
          2,
          3
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'http://www.advanced-store.com/de/datenschutz/'
      },
      {
        id: 190,
        name: 'video intelligence AG',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.vi.ai/privacy-policy/'
      },
      {
        id: 84,
        name: 'Semasio GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.semasio.com/privacy-policy/'
      },
      {
        id: 65,
        name: 'Location Sciences AI Ltd',
        purposeIds: [
          1,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.locationsciences.ai/privacy-policy/'
      },
      {
        id: 210,
        name: 'Zemanta, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1
        ],
        policyUrl: 'http://www.zemanta.com/legal/privacy'
      },
      {
        id: 200,
        name: 'Tapjoy, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.tapjoy.com/legal/#privacy-policy'
      },
      {
        id: 188,
        name: 'Sellpoints Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://retargeter.com/service-privacy-policy/',
        deletedDate: '2019-09-17T00:00:00Z'
      },
      {
        id: 217,
        name: '2KDirect, Inc. (dba iPromote)',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3
        ],
        featureIds: [],
        policyUrl: 'https://www.ipromote.com/privacy-policy/'
      },
      {
        id: 156,
        name: 'Centro, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.centro.net/privacy-policy/'
      },
      {
        id: 194,
        name: 'Rezonence Limited',
        purposeIds: [
          3,
          5
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://rezonence.com/privacy-policy/'
      },
      {
        id: 226,
        name: 'Publicis Media GmbH',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.publicismedia.de/datenschutz/'
      },
      {
        id: 198,
        name: 'SYNC',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://redirect.sync.tv/privacy/',
        deletedDate: '2019-09-12T00:00:00Z'
      },
      {
        id: 227,
        name: 'ORTEC B.V.',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.ortecadscience.com/privacy-policy/'
      },
      {
        id: 225,
        name: 'Ligatus GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.ligatus.com/en/privacy-policy'
      },
      {
        id: 205,
        name: 'Adssets AB',
        purposeIds: [],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [],
        policyUrl: 'http://adssets.com/policy/'
      },
      {
        id: 179,
        name: 'Collective Europe Ltd.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.timeincuk.com/privacy/'
      },
      {
        id: 31,
        name: 'Ogury Ltd.',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.ogury.com/privacy-policy/'
      },
      {
        id: 92,
        name: '1plusX AG',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.1plusx.com/privacy-policy/'
      },
      {
        id: 155,
        name: 'AntVoice',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.antvoice.com/en/privacypolicy/'
      },
      {
        id: 115,
        name: 'smartclip Europe GmbH',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://privacy-portal.smartclip.net/'
      },
      {
        id: 126,
        name: 'DoubleVerify Inc.​',
        purposeIds: [
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.doubleverify.com/privacy/'
      },
      {
        id: 193,
        name: 'Mediasmart Mobile S.L.',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://mediasmart.io/privacy/'
      },
      {
        id: 245,
        name: 'IgnitionOne',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.ignitionone.com/privacy-policy/'
      },
      {
        id: 213,
        name: 'emetriq GmbH',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.emetriq.com/datenschutz/'
      },
      {
        id: 244,
        name: 'Leadplace - Temelio',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://temelio.com/vie-privee'
      },
      {
        id: 224,
        name: 'adrule mobile GmbH',
        purposeIds: [
          2,
          4
        ],
        legIntPurposeIds: [
          1,
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.adrule.net/de/datenschutz/'
      },
      {
        id: 174,
        name: 'A Million Ads Ltd',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3
        ],
        featureIds: [],
        policyUrl: 'https://www.amillionads.com/privacy-policy'
      },
      {
        id: 192,
        name: 'remerge GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://remerge.io/privacy-policy.html'
      },
      {
        id: 232,
        name: 'Rockerbox, Inc',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'http://rockerbox.com/privacy'
      },
      {
        id: 256,
        name: 'Bounce Exchange, Inc',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.bouncex.com/privacy/'
      },
      {
        id: 234,
        name: 'ZBO Media',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://zbo.media/mentions-legales/politique-de-confidentialite-service-publicitaire/'
      },
      {
        id: 246,
        name: 'Smartology Limited',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.smartology.net/privacy-policy/'
      },
      {
        id: 241,
        name: 'OneTag Ltd',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.onetag.net/privacy/'
      },
      {
        id: 254,
        name: 'LiquidM Technology GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://liquidm.com/privacy-policy/'
      },
      {
        id: 215,
        name: 'ARMIS SAS',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://armis.tech/en/armis-personal-data-privacy-policy/'
      },
      {
        id: 167,
        name: 'Audiens S.r.l.',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.audiens.com/privacy'
      },
      {
        id: 240,
        name: '7Hops.com Inc. (ZergNet)',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://zergnet.com/privacy'
      },
      {
        id: 235,
        name: 'Bucksense Inc',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://www.bucksense.com/platform-privacy-policy/'
      },
      {
        id: 185,
        name: 'Bidtellect, Inc',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.bidtellect.com/privacy-policy/'
      },
      {
        id: 258,
        name: 'Adello Group AG',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.adello.com/privacy-policy/'
      },
      {
        id: 169,
        name: 'RTK.IO, Inc',
        purposeIds: [
          1,
          4
        ],
        legIntPurposeIds: [
          2,
          3,
          5
        ],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'http://www.rtk.io/privacy.html'
      },
      {
        id: 208,
        name: 'Spotad',
        purposeIds: [
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.spotad.co/privacy-policy/'
      },
      {
        id: 211,
        name: 'AdTheorent, Inc',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://adtheorent.com/privacy-policy'
      },
      {
        id: 229,
        name: 'Digitize New Media Ltd',
        purposeIds: [
          2,
          4
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.digitize.ie/online-privacy'
      },
      {
        id: 273,
        name: 'Bannerflow AB',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.bannerflow.com/privacy '
      },
      {
        id: 104,
        name: 'Sonobi, Inc',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://sonobi.com/privacy-policy/'
      },
      {
        id: 162,
        name: 'Unruly Group Ltd',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://unruly.co/privacy/'
      },
      {
        id: 249,
        name: 'Spolecznosci Sp. z o.o. Sp. k.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.spolecznosci.pl/polityka-prywatnosci'
      },
      {
        id: 125,
        name: 'Research Now Group, Inc',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.valuedopinions.co.uk/privacy',
        deletedDate: '2019-09-17T00:00:00Z'
      },
      {
        id: 170,
        name: 'Goodway Group, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://goodwaygroup.com/privacy-policy/'
      },
      {
        id: 160,
        name: 'Netsprint SA',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://spoldzielnia.nsaudience.pl/opt-out/'
      },
      {
        id: 189,
        name: 'Intowow Innovation Ltd.',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.intowow.com/privacy/',
        deletedDate: '2019-08-12T00:00:00Z'
      },
      {
        id: 279,
        name: 'Mirando GmbH &amp; Co KG',
        purposeIds: [],
        legIntPurposeIds: [
          1
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://wwwmirando.de/datenschutz/'
      },
      {
        id: 269,
        name: 'Sanoma Media Finland',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://sanoma.fi/tietoa-meista/tietosuoja/',
        deletedDate: '2019-08-07T00:00:00Z'
      },
      {
        id: 276,
        name: 'Viralize SRL',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'https://viralize.com/privacy-policy'
      },
      {
        id: 87,
        name: 'Genius Sports Media Limited',
        purposeIds: [
          2,
          4
        ],
        legIntPurposeIds: [
          1,
          3,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.geniussports.com/privacy-policy'
      },
      {
        id: 182,
        name: 'Collective, Inc. dba Visto',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.vistohub.com/privacy-policy/',
        deletedDate: '2019-07-26T00:00:00Z'
      },
      {
        id: 255,
        name: 'Onnetwork Sp. z o.o.',
        purposeIds: [
          2,
          3,
          5
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://www.onnetwork.tv/pp_services.php'
      },
      {
        id: 203,
        name: 'Revcontent, LLC',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://intercom.help/revcontent2/en/articles/2290675-revcontent-s-privacy-policy'
      },
      {
        id: 260,
        name: 'RockYou, Inc.',
        purposeIds: [
          3
        ],
        legIntPurposeIds: [
          1,
          2,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://rockyou.com/privacy-policy/',
        deletedDate: '2019-08-09T00:00:00Z'
      },
      {
        id: 237,
        name: 'LKQD, a division of Nexstar Digital, LLC.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://www.lkqd.com/privacy-policy/',
        deletedDate: '2019-09-12T00:00:00Z'
      },
      {
        id: 274,
        name: 'Golden Bees',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.goldenbees.fr/en/privacy-charter/'
      },
      {
        id: 280,
        name: 'Spot.IM Ltd.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'http://spot.im/privacy',
        deletedDate: '2019-09-12T00:00:00Z'
      },
      {
        id: 239,
        name: 'Triton Digital Canada Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.tritondigital.com/privacy-policies'
      },
      {
        id: 177,
        name: 'plista GmbH',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.plista.com/about/privacy/'
      },
      {
        id: 201,
        name: 'TimeOne',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://privacy.timeonegroup.com/en/'
      },
      {
        id: 150,
        name: 'Inskin Media LTD',
        purposeIds: [
          2,
          3,
          5
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'http://www.inskinmedia.com/privacy-policy.html'
      },
      {
        id: 252,
        name: 'Jaduda GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.jadudamobile.com/datenschutzerklaerung/'
      },
      {
        id: 248,
        name: 'Converge-Digital',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://converge-digital.com/privacy-policy/'
      },
      {
        id: 161,
        name: 'Smadex SL',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://smadex.com/end-user-privacy-policy/'
      },
      {
        id: 285,
        name: 'Comcast International France SAS',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.freewheel.com/privacy-policy'
      },
      {
        id: 228,
        name: 'McCann Discipline LTD',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.primis.tech/wp-content/uploads/2020/01/Primis-Privacy-Policy.pdf'
      },
      {
        id: 299,
        name: 'AdClear GmbH',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [
          2,
          3,
          4
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.adclear.de/datenschutzerklaerung/'
      },
      {
        id: 277,
        name: 'Codewise VL Sp. z o.o. Sp. k',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://voluumdsp.com/end-user-privacy-policy/'
      },
      {
        id: 259,
        name: 'ADYOULIKE SA',
        purposeIds: [
          1,
          2,
          4
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.adyoulike.com/privacy_policy.php'
      },
      {
        id: 289,
        name: 'mobalo GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.mobalo.com/datenschutz/',
        deletedDate: '2019-07-25T00:00:00Z'
      },
      {
        id: 272,
        name: 'A.Mob',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.we-are-adot.com/privacy-policy/'
      },
      {
        id: 230,
        name: 'Steel House, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://steelhouse.com/privacy-policy/'
      },
      {
        id: 253,
        name: 'Improve Digital International BV',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.improvedigital.com/platform-privacy-policy'
      },
      {
        id: 304,
        name: 'On Device Research Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://s.on-device.com/privacyPolicy'
      },
      {
        id: 314,
        name: 'Keymantics',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.keymantics.com/assets/privacy-policy.pdf'
      },
      {
        id: 257,
        name: 'R-TARGET',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'http://www.r-target.com/privacy',
        deletedDate: '2019-08-26T00:00:00Z'
      },
      {
        id: 317,
        name: 'mainADV Srl',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://www.mainad.com/privacy-policy/'
      },
      {
        id: 278,
        name: 'Integral Ad Science, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://integralads.com/privacy-policy/'
      },
      {
        id: 291,
        name: 'Qwertize',
        purposeIds: [
          1,
          2,
          4
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.qwertize.com/en/privacy',
        deletedDate: '2019-08-26T00:00:00Z'
      },
      {
        id: 295,
        name: 'Sojern, Inc.',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.sojern.com/privacy/product-privacy-policy/'
      },
      {
        id: 315,
        name: 'Celtra, Inc.',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.celtra.com/privacy-policy/'
      },
      {
        id: 165,
        name: 'SpotX, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.spotx.tv/privacy-policy/'
      },
      {
        id: 47,
        name: 'ADMAN - Phaistos Networks, S.A.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.adman.gr/privacy'
      },
      {
        id: 134,
        name: 'SMARTSTREAM.TV GmbH',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.smartstream.tv/en/privacy'
      },
      {
        id: 325,
        name: 'Knorex Pte Ltd',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.knorex.com/privacy'
      },
      {
        id: 316,
        name: 'Gamned',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.gamned.com/privacy-policy/'
      },
      {
        id: 318,
        name: 'Accorp Sp. z o.o.',
        purposeIds: [
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.instytut-pollster.pl/privacy-policy/'
      },
      {
        id: 199,
        name: 'ADUX',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.adux.com/donnees-personelles/'
      },
      {
        id: 236,
        name: 'PowerLinks Media Limited',
        purposeIds: [
          1,
          2,
          5
        ],
        legIntPurposeIds: [
          3,
          4
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.powerlinks.com/privacy-policy/'
      },
      {
        id: 294,
        name: 'Jivox Corporation',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.jivox.com/privacy'
      },
      {
        id: 143,
        name: 'Connatix Native Exchange Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://connatix.com/privacy-policy/'
      },
      {
        id: 297,
        name: 'Polar Mobile Group Inc.',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://privacy.polar.me'
      },
      {
        id: 319,
        name: 'Clipcentric, Inc.',
        purposeIds: [
          1,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://clipcentric.com/privacy.bhtml'
      },
      {
        id: 290,
        name: 'Readpeak Oy',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://readpeak.com/privacy-policy/'
      },
      {
        id: 323,
        name: 'Perform Media Services Ltd',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.statsperform.com/privacy-policy/'
      },
      {
        id: 119,
        name: 'Fusio by S4M',
        purposeIds: [
          1,
          2,
          5
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'http://www.s4m.io/privacy-policy/'
      },
      {
        id: 302,
        name: 'Mobile Professionals BV',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://mobpro.com/privacy.html'
      },
      {
        id: 212,
        name: 'usemax advertisement (Emego GmbH)',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.usemax.de/?l=privacy'
      },
      {
        id: 264,
        name: 'Adobe Advertising Cloud',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.adobe.com/privacy/experience-cloud.html'
      },
      {
        id: 44,
        name: 'The ADEX GmbH',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://theadex.com/privacy-opt-out/'
      },
      {
        id: 282,
        name: 'Welect GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.welect.de/datenschutz'
      },
      {
        id: 238,
        name: 'StackAdapt',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.stackadapt.com/privacy'
      },
      {
        id: 284,
        name: 'WEBORAMA',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://weborama.com/privacy_en/'
      },
      {
        id: 148,
        name: 'Liveintent Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://liveintent.com/services-privacy-policy/'
      },
      {
        id: 64,
        name: 'DigiTrust / IAB Tech Lab',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.digitru.st/privacy-policy/'
      },
      {
        id: 301,
        name: 'zeotap GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://zeotap.com/website-privacy-policy'
      },
      {
        id: 275,
        name: 'TabMo SAS',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'http://static.tabmo.io.s3.amazonaws.com/privacy-policy/index.html'
      },
      {
        id: 310,
        name: 'Adevinta Spain S.L.U.',
        purposeIds: [],
        legIntPurposeIds: [
          4
        ],
        featureIds: [],
        policyUrl: 'https://www.adevinta.com/about/privacy/'
      },
      {
        id: 139,
        name: 'Permodo GmbH',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://permodo.com/de/privacy.html'
      },
      {
        id: 326,
        name: 'AdTiming Technology Company Limited',
        purposeIds: [
          3,
          5
        ],
        legIntPurposeIds: [
          1,
          2,
          4
        ],
        featureIds: [],
        policyUrl: 'http://www.adtiming.com/en/privacypolicy.html'
      },
      {
        id: 262,
        name: 'Fyber ',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.fyber.com/legal/privacy-policy/'
      },
      {
        id: 331,
        name: 'ad6media',
        purposeIds: [
          1,
          2,
          4
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.ad6media.fr/privacy'
      },
      {
        id: 345,
        name: 'The Kantar Group Limited',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.kantar.com/cookies-policies'
      },
      {
        id: 308,
        name: 'Rockabox Media Ltd',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3
        ],
        featureIds: [],
        policyUrl: 'http://scoota.com/privacy-policy'
      },
      {
        id: 270,
        name: 'Marfeel Solutions S.L',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.marfeel.com/privacy-policy/'
      },
      {
        id: 333,
        name: 'InMobi Pte Ltd',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.inmobi.com/privacy-policy-for-eea'
      },
      {
        id: 202,
        name: 'Telaria, Inc',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://telaria.com/privacy-policy/'
      },
      {
        id: 328,
        name: 'Gemius SA',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.gemius.com/cookie-policy.html'
      },
      {
        id: 281,
        name: 'Wizaly',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.wizaly.com/terms-of-use#privacy-policy'
      },
      {
        id: 354,
        name: 'Apester Ltd',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://apester.com/privacy-policy/'
      },
      {
        id: 320,
        name: 'Adelphic LLC',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://adelphic.com/platform/privacy/'
      },
      {
        id: 359,
        name: 'Aerserv LLC',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.aerserv.com/privacy-policy/'
      },
      {
        id: 265,
        name: 'Instinctive, Inc.',
        purposeIds: [
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [],
        policyUrl: 'https://instinctive.io/privacy'
      },
      {
        id: 349,
        name: 'Optomaton UG',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'http://optomaton.com/privacy.html'
      },
      {
        id: 288,
        name: 'Video Media Groep B.V.',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.videomediagroup.com/wp-content/uploads/2016/01/Privacy-policy-VMG.pdf',
        deletedDate: '2019-09-17T00:00:00Z'
      },
      {
        id: 266,
        name: 'Digilant Spain, SLU',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.digilant.com/es/politica-privacidad/'
      },
      {
        id: 339,
        name: 'Vuble',
        purposeIds: [
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://www.vuble.tv/us/privacy',
        deletedDate: '2019-08-26T00:00:00Z'
      },
      {
        id: 303,
        name: 'Orion Semantics',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://static.orion-semantics.com/privacy.html'
      },
      {
        id: 261,
        name: 'Signal Digital Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.signal.co/privacy-policy/'
      },
      {
        id: 83,
        name: 'Visarity Technologies GmbH',
        purposeIds: [
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://primo.design/docs/PrivacyPolicyPrimo.html'
      },
      {
        id: 343,
        name: 'DIGITEKA Technologies',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.ultimedia.com/POLICY.html'
      },
      {
        id: 330,
        name: 'Linicom',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.linicom.com/privacy/'
      },
      {
        id: 231,
        name: 'Acuityads Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.acuityads.com/privacy-policy/'
      },
      {
        id: 216,
        name: 'Mindlytix SAS',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'http://mindlytix.com/privacy/'
      },
      {
        id: 360,
        name: 'Permutive Technologies, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://permutive.com/privacy'
      },
      {
        id: 361,
        name: 'Permutive Ltd.',
        purposeIds: [],
        legIntPurposeIds: [
          1
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://permutive.com/privacy'
      },
      {
        id: 311,
        name: 'Mobfox US LLC',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.mobfox.com/privacy-policy/'
      },
      {
        id: 358,
        name: 'MGID Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.mgid.com/privacy-policy'
      },
      {
        id: 152,
        name: 'Meetrics GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.meetrics.com/en/data-privacy/'
      },
      {
        id: 251,
        name: 'Yieldlove GmbH',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.yieldlove.com/cookie-policy'
      },
      {
        id: 371,
        name: 'Seeding Alliance GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://seeding-alliance.de/datenschutz'
      },
      {
        id: 344,
        name: 'My6sense Inc.',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [
          2,
          4
        ],
        featureIds: [],
        policyUrl: 'https://my6sense.com/privacy-policy/'
      },
      {
        id: 347,
        name: 'Ezoic Inc.',
        purposeIds: [
          2,
          4,
          5
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://www.ezoic.com/terms/'
      },
      {
        id: 218,
        name: 'Bigabid Media ltd',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.bigabid.com/privacy-policy'
      },
      {
        id: 350,
        name: 'Free Stream Media Corp. dba Samba TV',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://samba.tv/legal/privacy-policy/'
      },
      {
        id: 351,
        name: 'Samba TV UK Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://samba.tv/legal/privacy-policy/'
      },
      {
        id: 341,
        name: 'Somo Audience Corp',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://somoaudience.com/legal/'
      },
      {
        id: 380,
        name: 'Vidoomy Media SL',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://vidoomy.com/privacy-policy.html'
      },
      {
        id: 378,
        name: 'communicationAds GmbH &amp; Co. KG',
        purposeIds: [],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://www.communicationads.net/aboutus/privacy/'
      },
      {
        id: 369,
        name: 'Getintent USA, inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://getintent.com/privacy/'
      },
      {
        id: 184,
        name: 'mediarithmics SAS',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.mediarithmics.com/en-us/content/privacy-policy'
      },
      {
        id: 368,
        name: 'VECTAURY',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.vectaury.io/en/personal-data'
      },
      {
        id: 373,
        name: 'Nielsen Marketing Cloud',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'http://www.nielsen.com/us/en/privacy-statement/exelate-privacy-policy.html'
      },
      {
        id: 214,
        name: 'Digital Control GmbH &amp; Co. KG',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://advolution.de/privacy.php'
      },
      {
        id: 388,
        name: 'numberly',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://ads.1000mercis.com/fr.html'
      },
      {
        id: 250,
        name: 'Qriously',
        purposeIds: [
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://www.qriously.com/privacy'
      },
      {
        id: 223,
        name: 'Audience Trading Platform Ltd.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://atp.io/privacy-policy'
      },
      {
        id: 384,
        name: 'Pixalate, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [],
        policyUrl: 'http://pixalate.com/privacypolicy/',
        deletedDate: '2019-11-08T00:00:00Z'
      },
      {
        id: 387,
        name: 'Triapodi Ltd.',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://appreciate.mobi/page.html#/end-user-privacy-policy'
      },
      {
        id: 312,
        name: 'Exactag GmbH',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.exactag.com/en/data-privacy/'
      },
      {
        id: 178,
        name: 'Affectv Ltd',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://affectv.com/privacy-policy'
      },
      {
        id: 377,
        name: 'AddApptr GmbH',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.addapptr.com/data-privacy'
      },
      {
        id: 382,
        name: 'The Reach Group GmbH',
        purposeIds: [
          1,
          2,
          4,
          5
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'https://www.reachgroup.com/en/privacy-statement/'
      },
      {
        id: 206,
        name: 'Hybrid Adtech GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://hybrid.ai/data_protection_policy'
      },
      {
        id: 403,
        name: 'Mobusi Mobile Advertising S.L.',
        purposeIds: [
          1,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.mobusi.com/privacy.en.html'
      },
      {
        id: 385,
        name: 'Oracle Data Cloud',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html'
      },
      {
        id: 404,
        name: 'Duplo Media AS',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.easy-ads.com/privacypolicy.htm'
      },
      {
        id: 242,
        name: 'twiago GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.twiago.com/datenschutz/'
      },
      {
        id: 376,
        name: 'Pocketmath Pte Ltd',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.pocketmath.com/privacy-policy'
      },
      {
        id: 402,
        name: 'Effiliation',
        purposeIds: [
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://inter.effiliation.com/politique-confidentialite.html'
      },
      {
        id: 413,
        name: 'Eulerian Technologies',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.eulerian.com/en/privacy/'
      },
      {
        id: 400,
        name: 'Whenever Media Ltd',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.whenevermedia.com/privacy-policy',
        deletedDate: '2019-07-29T00:00:00Z'
      },
      {
        id: 171,
        name: 'Webedia',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.webedia-group.com/site/privacy-policy'
      },
      {
        id: 398,
        name: 'Yormedia Solutions Ltd',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.yormedia.com/privacy-and-cookies-notice/',
        deletedDate: '2019-08-06T00:00:00Z'
      },
      {
        id: 415,
        name: 'Seenthis AB',
        purposeIds: [],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://seenthis.co/privacy-notice-2018-04-18.pdf'
      },
      {
        id: 263,
        name: 'Nativo, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.nativo.com/interest-based-ads'
      },
      {
        id: 329,
        name: 'Browsi Mobile Ltd',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://gobrowsi.com/browsi-privacy-policy/'
      },
      {
        id: 389,
        name: 'Bidmanagement GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.adspert.net/en/privacy/'
      },
      {
        id: 337,
        name: 'SheMedia, LLC',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'http://corporate.shemedia.com/faq/ad-services-privacy-policy'
      },
      {
        id: 422,
        name: 'Brand Metrics Sweden AB',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://collector.brandmetrics.com/brandmetrics_privacypolicy.pdf'
      },
      {
        id: 421,
        name: 'LeftsnRight, Inc. dba LIQWID',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://liqwid.solutions/privacy-policy'
      },
      {
        id: 426,
        name: 'TradeTracker',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://tradetracker.com/privacy-policy/',
        deletedDate: '2019-08-21T00:00:00Z'
      },
      {
        id: 394,
        name: 'AudienceProject Aps',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://privacy.audienceproject.com'
      },
      {
        id: 287,
        name: 'Avazu Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          4
        ],
        featureIds: [
          3
        ],
        policyUrl: 'http://avazuinc.com/opt-out/'
      },
      {
        id: 243,
        name: 'Cloud Technologies S.A.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.cloudtechnologies.pl/en/internet-advertising-privacy-policy'
      },
      {
        id: 113,
        name: 'iotec global Ltd.',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.iotecglobal.com/privacy-policy/'
      },
      {
        id: 338,
        name: 'dunnhumby Germany GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.sociomantic.com/privacy/en/'
      },
      {
        id: 405,
        name: 'IgnitionAi Ltd',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.isitelab.io/default.aspx'
      },
      {
        id: 416,
        name: 'Commanders Act',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.commandersact.com/en/privacy/'
      },
      {
        id: 434,
        name: 'DynAdmic',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [
          2,
          4
        ],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'http://eu.dynadmic.com/privacy-policy/'
      },
      {
        id: 435,
        name: 'SINGLESPOT SAS ',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'https://www.singlespot.com/privacy_policy?locale=fr'
      },
      {
        id: 409,
        name: 'Arrivalist Co.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.arrivalist.com/privacy'
      },
      {
        id: 321,
        name: 'Ziff Davis LLC',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.ziffdavis.com/privacy-policy'
      },
      {
        id: 436,
        name: 'INVIBES GROUP',
        purposeIds: [
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.invibes.com/terms'
      },
      {
        id: 442,
        name: 'R-Advertising',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.tradedoubler.com/en/privacy-policy/',
        deletedDate: '2019-08-20T00:00:00Z'
      },
      {
        id: 362,
        name: 'Myntelligence Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.myntelligence.com/privacy-page/'
      },
      {
        id: 418,
        name: 'PROXISTORE',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.proxistore.com/common/en/cgv'
      },
      {
        id: 449,
        name: 'Mobile Journey B.V.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://mobilejourney.com/Privacy-Policy',
        deletedDate: '2019-09-05T00:00:00Z'
      },
      {
        id: 443,
        name: 'Tradedoubler AB',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.tradedoubler.com/en/privacy-policy/',
        deletedDate: '2019-08-13T00:00:00Z'
      },
      {
        id: 429,
        name: 'Signals',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://signalsdata.com/platform-cookie-policy/'
      },
      {
        id: 335,
        name: 'Beachfront Media LLC',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'http://beachfront.com/privacy-policy/'
      },
      {
        id: 407,
        name: 'Publishers Internationale Pty Ltd',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.pi-rate.com.au/privacy.html',
        deletedDate: '2019-11-08T00:00:00Z'
      },
      {
        id: 427,
        name: 'Proxi.cloud Sp. z o.o.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://proxi.cloud/info/privacy-policy/'
      },
      {
        id: 374,
        name: 'Bmind a Sales Maker Company, S.L.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.bmind.es/legal-notice/'
      },
      {
        id: 438,
        name: 'INVIDI technologies AB',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://www.invidi.com/wp-content/uploads/2020/02/ad-tech-services-privacy-policy.pdf'
      },
      {
        id: 450,
        name: 'Neodata Group srl',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.neodatagroup.com/en/security-policy'
      },
      {
        id: 452,
        name: 'Innovid Inc.',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.innovid.com/privacy-policy'
      },
      {
        id: 444,
        name: 'Playbuzz Ltd. ',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.playbuzz.com/PrivacyPolicy'
      },
      {
        id: 412,
        name: 'Cxense ASA',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.cxense.com/about-us/privacy-policy'
      },
      {
        id: 454,
        name: 'Adimo',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://adimo.co/privacy-policy/',
        deletedDate: '2019-09-12T00:00:00Z'
      },
      {
        id: 455,
        name: 'GDMServices, Inc. d/b/a FiksuDSP',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://fiksu.com/privacy-policy/'
      },
      {
        id: 298,
        name: 'Cuebiq Inc.',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.cuebiq.com/privacypolicy/',
        deletedDate: '2019-08-30T00:00:00Z'
      },
      {
        id: 423,
        name: 'travel audience GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://travelaudience.com/product-privacy-policy/'
      },
      {
        id: 397,
        name: 'Demandbase, Inc. ',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.demandbase.com/privacy-policy/'
      },
      {
        id: 381,
        name: 'Solocal',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://client.adhslx.com/privacy.html '
      },
      {
        id: 425,
        name: 'ADRINO Sp. z o.o.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.adrino.pl/ciasteczkowa-polityka/',
        deletedDate: '2019-09-05T00:00:00Z'
      },
      {
        id: 365,
        name: 'Forensiq LLC',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'https://impact.com/privacy-policy/'
      },
      {
        id: 447,
        name: 'Adludio Ltd',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.adludio.com/privacy-policy/'
      },
      {
        id: 410,
        name: 'Adtelligent Inc.',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://adtelligent.com/privacy-policy/'
      },
      {
        id: 137,
        name: 'Ströer SSP GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3
        ],
        featureIds: [],
        policyUrl: 'https://www.stroeer.de/fileadmin/de/Konvergenz_und_Konzepte/Daten_und_Technologien/Stroeer_SSP/Downloads/Datenschutz_Stroeer_SSP.pdf'
      },
      {
        id: 395,
        name: 'PREX Programmatic Exchange GmbH&amp;Co KG',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.programmatic-exchange.com/privacy'
      },
      {
        id: 462,
        name: 'Bidstack Limited',
        purposeIds: [
          1,
          2,
          5
        ],
        legIntPurposeIds: [
          3,
          4
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.bidstack.com/privacy-policy/'
      },
      {
        id: 466,
        name: 'TACTIC™ Real-Time Marketing AS',
        purposeIds: [],
        legIntPurposeIds: [
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://tacticrealtime.com/privacy/'
      },
      {
        id: 340,
        name: 'Yieldr UK',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'https://www.yieldr.com/privacy'
      },
      {
        id: 431,
        name: 'White Ops, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'https://www.whiteops.com/privacy'
      },
      {
        id: 336,
        name: 'Telecoming S.A.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4
        ],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.telecoming.com/privacy-policy/'
      },
      {
        id: 430,
        name: 'Ad Unity Ltd',
        purposeIds: [],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'http://www.adunity.com/privacy-policy.html',
        deletedDate: '2019-08-13T00:00:00Z'
      },
      {
        id: 346,
        name: 'Cybba, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://cybba.com/about/legal/data-processing-agreement/'
      },
      {
        id: 469,
        name: 'Zeta Global',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://zetaglobal.com/privacy-policy/'
      },
      {
        id: 440,
        name: 'DEFINE MEDIA GMBH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.definemedia.de/datenschutz-conative/'
      },
      {
        id: 375,
        name: 'Affle International',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://affle.com/privacy-policy '
      },
      {
        id: 196,
        name: 'AdElement Media Solutions Pvt Ltd',
        purposeIds: [
          1,
          2,
          4
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'http://adelement.com/privacy-policy.html'
      },
      {
        id: 268,
        name: 'Social Tokens Ltd. ',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://woobi.com/privacy/',
        deletedDate: '2019-10-02T00:00:00Z'
      },
      {
        id: 475,
        name: 'TAPTAP Networks SL',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.taptapnetworks.com/privacy_policy/'
      },
      {
        id: 474,
        name: 'hbfsTech',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2
        ],
        featureIds: [],
        policyUrl: 'http://www.hbfstech.com/fr/privacy.html'
      },
      {
        id: 448,
        name: 'Targetspot Belgium SPRL',
        purposeIds: [
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://marketing.targetspot.com/Targetspot/Legal/TargetSpot%20Privacy%20Policy%20-%20June%202018.pdf'
      },
      {
        id: 428,
        name: 'Internet BillBoard a.s.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.ibillboard.com/en/privacy-information/'
      },
      {
        id: 461,
        name: 'B2B Media Group EMEA GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.selfcampaign.com/static/privacy',
        deletedDate: '2019-08-14T00:00:00Z'
      },
      {
        id: 476,
        name: 'HIRO Media Ltd',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'http://hiro-media.com/privacy.php'
      },
      {
        id: 480,
        name: 'pilotx.tv',
        purposeIds: [
          2,
          3
        ],
        legIntPurposeIds: [
          1,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://pilotx.tv/privacy/'
      },
      {
        id: 366,
        name: 'CerebroAd.com s.r.o.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.cerebroad.com/privacy-policy',
        deletedDate: '2019-10-02T00:00:00Z'
      },
      {
        id: 392,
        name: 'Ströer Mobile Performance GmbH',
        purposeIds: [
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://stroeermobileperformance.com/?dl=privacy'
      },
      {
        id: 357,
        name: 'Totaljobs Group Ltd ',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.totaljobs.com/privacy-policy'
      },
      {
        id: 486,
        name: 'Madington',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [],
        policyUrl: 'https://delivered-by-madington.com/dat-privacy-policy/'
      },
      {
        id: 468,
        name: 'Neustar, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.home.neustar/privacy'
      },
      {
        id: 458,
        name: 'AdColony, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'http://www.adcolony.com/privacy-policy'
      },
      {
        id: 489,
        name: 'YellowHammer Media Group',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.yhmg.com/privacy-policy/',
        deletedDate: '2019-11-27T00:00:00Z'
      },
      {
        id: 293,
        name: 'SpringServe, LLC',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3
        ],
        featureIds: [],
        policyUrl: 'https://springserve.com/privacy-policy/'
      },
      {
        id: 484,
        name: 'Adledge',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://adledge.com/data-privacy/'
      },
      {
        id: 493,
        name: 'Clicksco Digital Limited',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://carbondmp.com/privacy.html'
      },
      {
        id: 495,
        name: 'Arcspire Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://public.arcspire.io/docs/ARCSPIRE-PrivacyPolicy_v1.0.pdf'
      },
      {
        id: 496,
        name: 'Automattic Inc.',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://en.blog.wordpress.com/2017/12/04/updated-privacy-policy/'
      },
      {
        id: 424,
        name: 'KUPONA GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'https://www.kupona.de/dsgvo/'
      },
      {
        id: 408,
        name: 'Fidelity Media',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://fidelity-media.com/privacy-policy/'
      },
      {
        id: 473,
        name: 'Sub2 Technologies Ltd',
        purposeIds: [
          3,
          4,
          5
        ],
        legIntPurposeIds: [
          1,
          2
        ],
        featureIds: [],
        policyUrl: 'http://www.sub2tech.com/privacy-policy/'
      },
      {
        id: 467,
        name: 'Haensel AMS GmbH',
        purposeIds: [
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://haensel-ams.com/data-privacy/'
      },
      {
        id: 488,
        name: 'Opinary GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://opinary.com/privacy-policy/',
        deletedDate: '2019-10-03T00:00:00Z'
      },
      {
        id: 490,
        name: 'PLAYGROUND XYZ EMEA LTD',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://playground.xyz/privacy'
      },
      {
        id: 464,
        name: 'Oracle AddThis',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.addthis.com/privacy/privacy-policy/',
        deletedDate: '2020-02-12T00:00:00Z'
      },
      {
        id: 491,
        name: 'Triboo Data Analytics',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.shinystat.com/it/informativa_sito.html'
      },
      {
        id: 499,
        name: 'PurposeLab, LLC',
        purposeIds: [
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://purposelab.com/privacy/',
        deletedDate: '2019-10-02T00:00:00Z'
      },
      {
        id: 502,
        name: 'NEXD',
        purposeIds: [
          5
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'https://nexd.com/privacy-policy'
      },
      {
        id: 465,
        name: 'Schibsted Product and Tech UK',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.schibsted.com/',
        deletedDate: '2019-07-26T00:00:00Z'
      },
      {
        id: 497,
        name: 'Little Big Data sp.z.o.o.',
        purposeIds: [
          1,
          2,
          4
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://dtxngr.com/legal/'
      },
      {
        id: 492,
        name: 'LotaData, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'https://lotadata.com/privacy_policy',
        deletedDate: '2019-10-02T00:00:00Z'
      },
      {
        id: 508,
        name: 'Lucid Holdings, LLC',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://luc.id/gdpr'
      },
      {
        id: 512,
        name: 'PubNative GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://pubnative.net/privacy-notice/'
      },
      {
        id: 471,
        name: 'FlexOffers.com, LLC',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.flexoffers.com/privacy-policy/',
        deletedDate: '2019-11-18T00:00:00Z'
      },
      {
        id: 494,
        name: 'Cablato Limited',
        purposeIds: [
          1,
          2,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://cablato.com/privacy',
        deletedDate: '2019-10-02T00:00:00Z'
      },
      {
        id: 516,
        name: 'Pexi B.V.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://pexi.nl/privacy-policy/'
      },
      {
        id: 507,
        name: 'AdsWizz Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.adswizz.com/our-privacy-policy/'
      },
      {
        id: 482,
        name: 'UberMedia, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://ubermedia.com/index.html_p=6424.html'
      },
      {
        id: 505,
        name: 'Shopalyst Inc',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.shortlyst.com/eu/privacy_terms.html'
      },
      {
        id: 517,
        name: 'SunMedia ',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.sunmedia.tv/en/cookies'
      },
      {
        id: 518,
        name: 'Accelerize Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://getcake.com/privacy-policy/'
      },
      {
        id: 511,
        name: 'Admixer EU GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://admixer.net/privacy'
      },
      {
        id: 479,
        name: 'INFINIA MOBILE S.L.',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://www.infiniamobile.com/privacy_policy'
      },
      {
        id: 513,
        name: 'Shopstyle',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.shopstyle.co.uk/privacy',
        deletedDate: '2019-10-02T00:00:00Z'
      },
      {
        id: 509,
        name: 'ATG Ad Tech Group GmbH',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://advandeo.com/privacy-policy/'
      },
      {
        id: 521,
        name: 'netzeffekt GmbH',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.netzeffekt.de/en/imprint'
      },
      {
        id: 487,
        name: 'nugg.ad GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.nugg.ad/en/privacy/general-information.html',
        deletedDate: '2019-10-03T00:00:00Z'
      },
      {
        id: 515,
        name: 'ZighZag',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://zighzag.com/privacy'
      },
      {
        id: 520,
        name: 'ChannelSight ',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.channelsight.com/privacypolicy/'
      },
      {
        id: 524,
        name: 'The Ozone Project Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://ozoneproject.com/privacy-policy'
      },
      {
        id: 529,
        name: 'Fidzup',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.fidzup.com/en/privacy/',
        deletedDate: '2019-11-18T00:00:00Z'
      },
      {
        id: 528,
        name: 'Kayzen',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1
        ],
        policyUrl: 'https://kayzen.io/data-privacy-policy'
      },
      {
        id: 527,
        name: 'Jampp LTD',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://jampp.com/privacy-policy/'
      },
      {
        id: 506,
        name: 'salesforce.com, inc.',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.salesforce.com/company/privacy/'
      },
      {
        id: 534,
        name: 'SmartyAds Inc.',
        purposeIds: [
          1,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://smartyads.com/privacy-policy'
      },
      {
        id: 535,
        name: 'INNITY',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.innity.com/privacy-policy.php'
      },
      {
        id: 514,
        name: 'Uprival LLC',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://uprival.com/privacy-policy/',
        deletedDate: '2020-01-21T00:00:00Z'
      },
      {
        id: 522,
        name: 'Tealium Inc',
        purposeIds: [
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://tealium.com/privacy/',
        deletedDate: '2020-01-21T00:00:00Z'
      },
      {
        id: 530,
        name: 'Near Pte Ltd',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://near.co/privacy'
      },
      {
        id: 539,
        name: 'AdDefend GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.addefend.com/en/privacy-policy/'
      },
      {
        id: 501,
        name: 'Alliance Gravity Data Media',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.alliancegravity.com/politiquedeprotectiondesdonneespersonnelles'
      },
      {
        id: 519,
        name: 'Chargeads',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.chargeplatform.com/privacy'
      },
      {
        id: 523,
        name: 'X-Mode Social, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://xmode.io/privacy-policy.html'
      },
      {
        id: 537,
        name: 'RUN, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.runads.com/privacy-policy'
      },
      {
        id: 531,
        name: 'Smartclip Hispania SL',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'http://rgpd-smartclip.com/'
      },
      {
        id: 536,
        name: 'GlobalWebIndex',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'http://legal.trendstream.net/non-panellist_privacy_policy'
      },
      {
        id: 542,
        name: 'Densou Trading Desk ApS',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://densou.dk/Policy.html',
        deletedDate: '2020-01-21T00:00:00Z'
      },
      {
        id: 525,
        name: 'PUB OCEAN LIMITED',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://rta.pubocean.com/privacy-policy/',
        deletedDate: '2019-10-03T00:00:00Z'
      },
      {
        id: 544,
        name: 'Kochava Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.kochava.com/support-privacy/'
      },
      {
        id: 543,
        name: 'PaperG, Inc. dba Thunder Industries',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.makethunder.com/privacy'
      },
      {
        id: 334,
        name: 'Cydersoft',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'http://www.videmob.com/privacy.html'
      },
      {
        id: 551,
        name: 'Illuma Technology Limited',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'https://www.weareilluma.com/endddd',
        deletedDate: '2019-11-14T00:00:00Z'
      },
      {
        id: 540,
        name: 'Tunnl BV',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://tunnl.com/privacy.html',
        deletedDate: '2019-12-20T00:00:00Z'
      },
      {
        id: 547,
        name: 'Video Reach',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.videoreach.de/about/privacy-policy/',
        deletedDate: '2020-01-21T00:00:00Z'
      },
      {
        id: 546,
        name: 'Smart Traffik',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://smart-traffik.io/politique-de-confidentialite'
      },
      {
        id: 541,
        name: 'DeepIntent, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.deepintent.com/privacypolicy'
      },
      {
        id: 545,
        name: 'ReigNN Platform Ltd.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.reignn.com/user-privacy-policy/'
      },
      {
        id: 439,
        name: 'Bit Q Holdings Limited',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.rippll.com/privacy'
      },
      {
        id: 553,
        name: 'Adhese',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://adhese.com/privacy-and-cookie-policy'
      },
      {
        id: 556,
        name: 'adhood.com',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://v3.adhood.com/en/site/politikavekurallar/gizlilik.php?lang=en'
      },
      {
        id: 550,
        name: 'Happydemics',
        purposeIds: [
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'https://www.iubenda.com/privacy-policy/69056167/full-legal'
      },
      {
        id: 560,
        name: 'Leiki Ltd.',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          4
        ],
        featureIds: [],
        policyUrl: 'http://www.leiki.com/privacy',
        deletedDate: '2020-01-07T00:00:00Z'
      },
      {
        id: 554,
        name: 'RMSi Radio Marketing Service interactive GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.rms.de/datenschutz/'
      },
      {
        id: 498,
        name: 'Dr. Banner',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://drbanner.com/privacypolicy_en/'
      },
      {
        id: 565,
        name: 'Adobe Audience Manager',
        purposeIds: [
          1,
          2,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.adobe.com/privacy/policy.html'
      },
      {
        id: 118,
        name: 'Drawbridge, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.drawbridge.com/privacy/'
      },
      {
        id: 572,
        name: 'CHEQ AI TECHNOLOGIES LTD.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'http://www.cheq.ai/privacy'
      },
      {
        id: 571,
        name: 'ViewPay',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://viewpay.tv/mentions-legales/'
      },
      {
        id: 568,
        name: 'Jointag S.r.l.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.jointag.com/privacy/kariboo/publisher/third/'
      },
      {
        id: 570,
        name: 'Czech Publisher Exchange z.s.p.o.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.cpex.cz/pro-uzivatele/ochrana-soukromi/'
      },
      {
        id: 559,
        name: 'Otto (GmbH &amp; Co KG)',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.otto.de/shoppages/service/datenschutz'
      },
      {
        id: 548,
        name: 'LBC France',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.leboncoin.fr/dc/cookies'
      },
      {
        id: 569,
        name: 'Kairos Fire',
        purposeIds: [
          1,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'https://www.kairosfire.com/privacy'
      },
      {
        id: 577,
        name: 'Neustar on behalf of The Procter & Gamble Company',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.pg.com/privacy/english/privacy_statement.shtml'
      },
      {
        id: 590,
        name: 'Sourcepoint Technologies, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.sourcepoint.com/privacy-policy'
      },
      {
        id: 587,
        name: 'Localsensor B.V.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.localsensor.com/privacy.html'
      },
      {
        id: 578,
        name: 'MAIRDUMONT NETLETIX GmbH&amp;Co. KG',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://mairdumont-netletix.com/datenschutz'
      },
      {
        id: 580,
        name: 'Goldbach Group AG',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://goldbach.com/ch/de/datenschutz'
      },
      {
        id: 593,
        name: 'Programatica de publicidad S.L.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://datmean.com/politica-privacidad/'
      },
      {
        id: 574,
        name: 'Realeyes OÜ',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.realeyesit.com/privacy'
      },
      {
        id: 581,
        name: 'Mobilewalla, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.mobilewalla.com/business-services-privacy-policy'
      },
      {
        id: 598,
        name: 'audio content & control GmbH',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.audio-cc.com/audiocc_privacy_policy.pdf'
      },
      {
        id: 596,
        name: 'InsurAds Technologies SA.',
        purposeIds: [
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.insurads.com/privacy.html'
      },
      {
        id: 576,
        name: 'StartApp Inc.',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.startapp.com/policy/privacy-policy/'
      },
      {
        id: 592,
        name: 'Colpirio.com',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://privacy-policy.colpirio.com/en/'
      },
      {
        id: 549,
        name: 'Bandsintown Amplified LLC',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'http://corp.bandsintown.com/privacy'
      },
      {
        id: 597,
        name: 'Better Banners A/S',
        purposeIds: [],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [],
        policyUrl: 'https://betterbanners.com/en/privacy'
      },
      {
        id: 584,
        name: 'Dynamic 1001 GmbH',
        purposeIds: [
          3
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://dynamic-tracking.com/Datenschutz.aspx'
      },
      {
        id: 601,
        name: 'WebAds B.V',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://privacy.webads.eu/'
      },
      {
        id: 599,
        name: 'Maximus Live LLC',
        purposeIds: [],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://maximusx.com/privacy-policy/'
      },
      {
        id: 604,
        name: 'Join',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.teamjoin.fr/privacy.html'
      },
      {
        id: 606,
        name: 'Impactify ',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://impactify.io/privacy-policy/'
      },
      {
        id: 608,
        name: 'News and Media Holding, a.s.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.newsandmedia.sk/gdpr/'
      },
      {
        id: 602,
        name: 'Online Solution Int Limited',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://adsafety.net/privacy.html/'
      },
      {
        id: 612,
        name: 'Adnami Aps',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.adnami.io/privacy'
      },
      {
        id: 591,
        name: 'Consumable, Inc.',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'http://consumable.com/privacy-policy.html'
      },
      {
        id: 614,
        name: 'Market Resource Partners LLC',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.mrpfd.com/privacy-policy/'
      },
      {
        id: 615,
        name: 'Adsolutions BV',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.adsolutions.com/privacy-policy/'
      },
      {
        id: 607,
        name: 'ucfunnel Co., Ltd.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.ucfunnel.com/privacy-policy'
      },
      {
        id: 609,
        name: 'Predicio',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.predic.io/privacy'
      },
      {
        id: 617,
        name: 'Onfocus (Adagio)',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://adagio.io/privacy'
      },
      {
        id: 620,
        name: 'Blue',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.getblue.io/privacy/'
      },
      {
        id: 610,
        name: 'Azerion Holding B.V.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://azerion.com/business/privacy.html'
      },
      {
        id: 621,
        name: 'Seznam.cz, a.s.',
        purposeIds: [
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          1,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.seznam.cz/ochranaudaju'
      },
      {
        id: 624,
        name: 'Norstat Danmark A/S',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://panel.norstat.dk/sikkerhed'
      },
      {
        id: 623,
        name: 'Adprime Media Inc. ',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://adprimehealth.com/privacy/'
      },
      {
        id: 95,
        name: 'Lotame Solutions, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.lotame.com/about-lotame/privacy/'
      },
      {
        id: 618,
        name: 'BEINTOO SPA',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.beintoo.com/privacy-cookie-policy/'
      },
      {
        id: 619,
        name: 'Capitaldata',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.capitaldata.fr/privacy'
      },
      {
        id: 625,
        name: 'BILENDI SA',
        purposeIds: [
          1,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.maximiles.com/privacy-policy'
      },
      {
        id: 628,
        name: ': Tappx',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.tappx.com/en/privacy-policy/'
      },
      {
        id: 630,
        name: 'Contact Impact GmbH',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://contactimpact.de/privacy'
      },
      {
        id: 626,
        name: 'Hivestack Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://hivestack.com/privacy-policy'
      },
      {
        id: 631,
        name: 'Relay42 Netherlands B.V.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://relay42.com/privacy'
      },
      {
        id: 627,
        name: 'D-Edge',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.d-edge.com/privacy-policy/'
      },
      {
        id: 638,
        name: 'Passendo ApS',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.passendo.com/users-privacy-policy/'
      },
      {
        id: 644,
        name: 'Gamoshi LTD',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.gamoshi.com/privacy-policy'
      },
      {
        id: 639,
        name: 'Smile Wanted Group',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.smilewanted.com/privacy.php'
      },
      {
        id: 635,
        name: 'WebMediaRM',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://www.webmediarm.com/vie_privee_et_opposition_en.php'
      },
      {
        id: 579,
        name: 'Ve Global',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.ve.com/privacy-policy'
      },
      {
        id: 645,
        name: 'Noster Finance S.L.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.finect.com/terminos-legales/politica-de-cookies'
      },
      {
        id: 653,
        name: 'Smartme Analytics',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'http://smartmeapp.com/info/smartme/aviso_legal.php'
      },
      {
        id: 613,
        name: 'Adserve.zone / Artworx AS',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://adserve.zone/adserveprivacypolicy.html'
      },
      {
        id: 573,
        name: 'Dailymotion SA',
        purposeIds: [
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [
          1
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.dailymotion.com/legal/privacy'
      },
      {
        id: 652,
        name: 'Skaze',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.skaze.fr/rgpd/'
      },
      {
        id: 646,
        name: 'Notify',
        purposeIds: [
          1,
          2,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://notify-group.com/en/mentions-legales/'
      },
      {
        id: 648,
        name: 'TrueData Solutions, Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.truedata.co/privacy-policy/'
      },
      {
        id: 647,
        name: 'Axel Springer Teaser Ad GmbH',
        purposeIds: [
          2
        ],
        legIntPurposeIds: [
          1,
          3,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.adup-tech.com/privacy'
      },
      {
        id: 654,
        name: 'GRAPHINIUM',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.graphinium.com/privacy/'
      },
      {
        id: 659,
        name: 'Research and Analysis of Media in Sweden AB',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://www2.rampanel.com/privacy-policy/'
      },
      {
        id: 656,
        name: 'Think Clever Media',
        purposeIds: [
          1,
          2,
          3,
          4
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.contentignite.com/privacy-policy/'
      },
      {
        id: 504,
        name: 'Alive & Kicking Global Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.mcsaatchiplc.com/legal/privacy-cookies'
      },
      {
        id: 657,
        name: 'GP One GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.gsi-one.org/de/privacy-policy.html'
      },
      {
        id: 655,
        name: 'Sportradar AG',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.sportradar.com/about-us/privacy/'
      },
      {
        id: 662,
        name: 'Soundcast',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://soundcast.fm/en/data-privacy'
      },
      {
        id: 665,
        name: 'Digital East GmbH',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.digitaleast.mobi/en/legal/privacy-policy/'
      },
      {
        id: 650,
        name: 'Telefonica Investigación y Desarrollo S.A.U',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'http://www.cognitivemarketing.tid.es/'
      },
      {
        id: 666,
        name: 'BeOp',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://beop.io/privacy'
      },
      {
        id: 663,
        name: 'Mobsuccess',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.mobsuccess.com/en/privacy'
      },
      {
        id: 658,
        name: 'BLIINK SAS',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://bliink.io/privacy-policy'
      },
      {
        id: 667,
        name: 'Liftoff Mobile, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://liftoff.io/privacy-policy/'
      },
      {
        id: 668,
        name: 'WhatRocks Inc. ',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.whatrocks.co/en/privacy-policy '
      },
      {
        id: 670,
        name: 'Timehop, Inc.',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.timehop.com/privacy'
      },
      {
        id: 674,
        name: 'Duration Media, LLC.',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.durationmedia.net/privacy-policy'
      },
      {
        id: 675,
        name: 'Instreamatic inc.',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://instreamatic.com/privacy-policy/'
      },
      {
        id: 676,
        name: 'BusinessClick',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.businessclick.com/documents/RegulaminProgramuBusinessClick-2019.pdf'
      },
      {
        id: 677,
        name: 'Intercept Interactive Inc. dba Undertone',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.undertone.com/privacy/'
      },
      {
        id: 660,
        name: 'Schibsted Norge AS',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://static.vg.no/privacy/',
        deletedDate: '2019-09-16T00:00:00Z'
      },
      {
        id: 672,
        name: 'Cedato Technologies LTD.',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.cedato.com/privacy-policy/'
      },
      {
        id: 673,
        name: 'TTNET AS',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'http://www.programattik.com/en/privacy-policy.aspx'
      },
      {
        id: 664,
        name: 'adMarketplace, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          3
        ],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'https://www.admarketplace.com/privacy-policy/'
      },
      {
        id: 671,
        name: 'Mediaforce LTD',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'http://casino.mindthebet.co.uk/themes/mindthebetv2-casino/privacy.php'
      },
      {
        id: 561,
        name: 'AuDigent',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://audigent.com/platform-privacy-policy'
      },
      {
        id: 682,
        name: 'Radio Net Media Limited',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          5
        ],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.adtonos.com/service-privacy-policy/'
      },
      {
        id: 684,
        name: 'Blue Billywig BV',
        purposeIds: [],
        legIntPurposeIds: [
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.bluebillywig.com/privacy-statement/'
      },
      {
        id: 686,
        name: 'The MediaGrid Inc.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://www.themediagrid.com/privacy-policy/'
      },
      {
        id: 685,
        name: 'Arkeero',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://arkeero.com/privacy-2/'
      },
      {
        id: 687,
        name: 'MISSENA',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'http://missena.com/confidentialite/'
      },
      {
        id: 690,
        name: 'Go.pl sp. z o.o.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://go.pl/polityka-prywatnosci/'
      },
      {
        id: 691,
        name: 'Lifesight Pte. Ltd.',
        purposeIds: [
          1,
          2,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://www.lifesight.io/privacy-policy/'
      },
      {
        id: 697,
        name: 'ADWAYS SAS',
        purposeIds: [],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'https://www.adways.com/confidentialite/?lang=en'
      },
      {
        id: 706,
        name: 'VRTCAL Markets, Inc.',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2
        ],
        featureIds: [
          3
        ],
        policyUrl: 'https://vrtcal.com/docs/PrivacyPolicy-Advertising.pdf'
      },
      {
        id: 681,
        name: 'MyTraffic',
        purposeIds: [
          1,
          3
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://www.mytraffic.io/en/privacy'
      },
      {
        id: 649,
        name: 'adality GmbH',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2
        ],
        featureIds: [
          1
        ],
        policyUrl: 'https://adality.de/en/privacy/'
      },
      {
        id: 712,
        name: 'Inspired Mobile Limited',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://byinspired.com/privacypolicy.pdf'
      },
      {
        id: 688,
        name: 'Effinity',
        purposeIds: [],
        legIntPurposeIds: [
          1
        ],
        featureIds: [],
        policyUrl: 'https://www.effiliation.com/politique-de-confidentialite/'
      },
      {
        id: 702,
        name: 'Kwanko',
        purposeIds: [
          1,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://www.kwanko.com/fr/rgpd/'
      },
      {
        id: 715,
        name: 'BidBerry SRL',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.bidberrymedia.com/privacy-policy/'
      },
      {
        id: 713,
        name: 'Dataseat Ltd',
        purposeIds: [
          2,
          5
        ],
        legIntPurposeIds: [
          1,
          3,
          4
        ],
        featureIds: [],
        policyUrl: 'https://dataseat.com/privacy-policy'
      },
      {
        id: 716,
        name: 'OnAudience Ltd',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.onaudience.com/internet-advertising-privacy-policy'
      },
      {
        id: 708,
        name: 'Dugout Limited ',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://dugout.com/privacy-policy'
      },
      {
        id: 717,
        name: 'Audience Network',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.en.audiencenetwork.pl/internet-advertising-privacy-policy'
      },
      {
        id: 718,
        name: 'AppConsent Xchange',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://appconsent.io/en/privacy-policy'
      },
      {
        id: 720,
        name: 'AAX LLC',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          1,
          3
        ],
        policyUrl: 'https://aax.media/privacy/'
      },
      {
        id: 678,
        name: 'Axonix Ltd',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [],
        featureIds: [
          3
        ],
        policyUrl: 'https://axonix.com/privacy-cookie-policy'
      },
      {
        id: 719,
        name: 'Online Advertising Network Sp. z o.o.',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.oan.pl/en/privacy-policy'
      },
      {
        id: 707,
        name: 'Dentsu Aegis Network Italia SpA',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.dentsuaegisnetwork.com/it/it/policies/info-cookie'
      },
      {
        id: 721,
        name: 'Beaconspark Ltd',
        purposeIds: [
          1,
          2,
          3
        ],
        legIntPurposeIds: [
          4,
          5
        ],
        featureIds: [
          1
        ],
        policyUrl: 'https://www.engageya.com/privacy'
      },
      {
        id: 724,
        name: 'Between Exchange',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          2,
          3
        ],
        policyUrl: 'https://en.betweenx.com/pdata.pdf'
      },
      {
        id: 728,
        name: 'Appier PTE Ltd',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.appier.com/privacy-policy/'
      },
      {
        id: 729,
        name: 'Cavai AS & UK ',
        purposeIds: [],
        legIntPurposeIds: [
          3
        ],
        featureIds: [],
        policyUrl: 'https://cav.ai/privacy-policy/'
      },
      {
        id: 723,
        name: 'Adzymic Pte Ltd',
        purposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'http://www.adzymic.co/privacy'
      },
      {
        id: 733,
        name: 'Anzu Virtual reality LTD',
        purposeIds: [
          1,
          2,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://anzu.io/privacy/'
      },
      {
        id: 737,
        name: 'Monet Engine Inc',
        purposeIds: [
          1,
          3,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [],
        policyUrl: 'https://appmonet.com/privacy-policy/'
      },
      {
        id: 740,
        name: '6Sense Insights, Inc.',
        purposeIds: [
          1
        ],
        legIntPurposeIds: [
          2,
          3,
          4,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'https://6sense.com/privacy-policy/'
      },
      {
        id: 744,
        name: 'Vidazoo Ltd',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          2
        ],
        policyUrl: 'https://vidazoo.gitbook.io/vidazoo-legal/privacy-policy'
      },
      {
        id: 731,
        name: 'GeistM Technologies LTD',
        purposeIds: [],
        legIntPurposeIds: [
          1,
          2,
          3,
          4,
          5
        ],
        featureIds: [],
        policyUrl: 'https://www.geistm.com/privacy'
      },
      {
        id: 741,
        name: 'Brand Advance Limited',
        purposeIds: [
          1,
          3,
          4,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          1,
          2,
          3
        ],
        policyUrl: 'https://www.wearebrandadvance.com/website-privacy-policy'
      },
      {
        id: 734,
        name: 'Cint AB',
        purposeIds: [
          1,
          5
        ],
        legIntPurposeIds: [],
        featureIds: [
          2
        ],
        policyUrl: 'https://www.cint.com/participant-privacy-notice/'
      },
      {
        id: 709,
        name: 'NC Audience Exchange, LLC (NewsIQ)',
        purposeIds: [
          1,
          2
        ],
        legIntPurposeIds: [
          3,
          5
        ],
        featureIds: [
          1,
          2
        ],
        policyUrl: 'www.ncaudienceexchange.com/privacy'
      }
    ]
  }