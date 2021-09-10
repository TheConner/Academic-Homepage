export const CVData = {
    personalData: {
      name: 'Conner Bradley',
      title: 'Computer Science Researcher',
      image: 'assets/Me.jpg',
      contacts: [
        { type: 'email', value: 'bradley@advtech.ca' },
        { type: 'location', value: 'Ottawa, ON' },
        { type: 'website', value: 'advtech.ca' },
        { type: 'github', value: 'github.com/TheConner' }
      ]
    },
    sections: [
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Computer Science (BCS)',
            authority: 'Carleton University',
            rightSide: '2017 - 2021',
            description: 'Accelerated master’s program'
          },
          {
            title: 'Master of Computer Science (MCS)',
            authority: 'Carleton University',
            rightSide: '2021 - Present',
            description: 'Research assistant in the field of Operating Systems security and IOT Security'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        description: '',
        icon: 'archive',
        items: [
          {
            title: 'Lead Software Developer',
            company: 'Some Company Example INC',
            description: 'I\'m working as a lead developer yeeeey',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: '',
            datesBetween: '2017.10 - Present',
            descriptionTags: ['Javascript', 'React']
          },
          {
            title: 'Software Developer',
            company: 'Some Company Example INC',
            description: 'I\'m using ReactJS and working as a front-end developer',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: 'Little info about company',
            datesBetween: '2016.8 - 2017.10'
          },
          {
            title: 'Intern',
            company: 'Some Software Example INC',
            description: 'I was warming up.',
            companyWebSite: 'http://someexamplecompany.com',
            companyMeta: 'SF USA',
            datesBetween: '2012.06 - 2012.10'
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Research',
        description: 'Optional',
        icon: 'fa-scroll',
        groups: [
          {
            sectionHeader: 'Research Interests',
            description: '',
            items: [
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' }
            ]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Conferences & Certificates',
        description: '',
        icon: 'comments',
        items: [
          {
            title: 'Some Conferences / 2019',
            authority: 'SomeConf',
            authorityWebSite: 'https://www.someconf.somesome'
          },
          {
            title: 'Some Conferences / 2019',
            authority: 'SomeConf',
            authorityMeta: 'Speaker',
            authorityWebSite: 'https://www.someconf.somesome',
            rightSide: 'test'
          },
          {
            title: 'Some Conferences / 2012',
            authorityMeta: 'Speaker'
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Proficient'
          },
          {
            authority: 'French',
            authorityMeta: 'Beginner'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['Javascript', 'Python', 'CSS', 'SQL', 'C', 'C#']
      },
      {
        type: 'tag-list',
        title: 'Hobbies & Interests',
        icon: 'cubes',
        items: ['Photography', 'Poetry']
      },
    ]
  }