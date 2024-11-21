// Mock metrics data
export const mockMetrics = [
  {
    id: '1',
    label: 'Total Users',
    value: 12453,
    change: 12,
    icon: 'users'
  },
  {
    id: '2',
    label: 'Active Orders',
    value: 789,
    change: -2.5,
    icon: 'shopping-cart'
  },
  {
    id: '3',
    label: 'Revenue',
    value: 98765,
    change: 8.2,
    icon: 'dollar-sign'
  },
  {
    id: '4',
    label: 'Pending Approvals',
    value: 42,
    change: 4.1,
    icon: 'clock'
  }
];

// Mock chart data
export const mockChartData = {
  revenue: [
    { name: 'Jan', value: 65000 },
    { name: 'Feb', value: 78000 },
    { name: 'Mar', value: 92000 },
    { name: 'Apr', value: 85000 },
    { name: 'May', value: 98765 },
    { name: 'Jun', value: 105000 },
    { name: 'Jul', value: 115000 },
    { name: 'Aug', value: 108000 },
    { name: 'Sep', value: 118000 },
    { name: 'Oct', value: 125000 },
    { name: 'Nov', value: 132000 },
    { name: 'Dec', value: 145000 }
  ],
  users: [
    { name: 'Jan', value: 9800 },
    { name: 'Feb', value: 10500 },
    { name: 'Mar', value: 11200 },
    { name: 'Apr', value: 11800 },
    { name: 'May', value: 12453 },
    { name: 'Jun', value: 13100 },
    { name: 'Jul', value: 13800 },
    { name: 'Aug', value: 14300 },
    { name: 'Sep', value: 15000 },
    { name: 'Oct', value: 15800 },
    { name: 'Nov', value: 16500 },
    { name: 'Dec', value: 17200 }
  ],
  userTypes: [
    { name: 'Dealers', value: 450 },
    { name: 'Architects', value: 320 },
    { name: 'Builders', value: 180 },
    { name: 'Others', value: 90 }
  ],
  orderStatus: [
    { name: 'Completed', value: 380 },
    { name: 'Processing', value: 220 },
    { name: 'Pending', value: 145 },
    { name: 'Cancelled', value: 44 }
  ]
};

// Mock categories
export const mockCategories = [
  {
    id: 'slabs',
    name: 'Slabs',
    description: 'Large format tiles and slabs',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&q=80&w=300&h=200'
  },
  {
    id: 'subways',
    name: 'Subways',
    description: 'Classic subway tiles',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=300&h=200'
  },
  {
    id: 'wall',
    name: 'Wall',
    description: 'Wall tiles and coverings',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=300&h=200'
  },
  {
    id: 'floor',
    name: 'Floor',
    description: 'Floor tiles and coverings',
    image: 'https://images.unsplash.com/photo-1584622781867-3c672631bbdd?auto=format&fit=crop&q=80&w=300&h=200'
  }
];

// Mock users data
export const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'dealer',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=200',
    businessInfo: {
      companyName: 'Doe Enterprises',
      phone: '+91 98765 43210',
      gstNumber: '29ABCDE1234F1Z5',
      panNumber: 'ABCDE1234F',
      address: '123 Business District, Mumbai, India',
      salespeople: [
        {
          id: 'sp1',
          name: 'Alice Smith',
          email: 'alice@example.com',
          phone: '+91 98765 43211',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=200',
          status: 'active',
          assignedDate: '2024-01-15',
          lastInteraction: '2024-03-15T10:30:00Z'
        },
        {
          id: 'sp2',
          name: 'Bob Wilson',
          email: 'bob@example.com',
          phone: '+91 98765 43212',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=200',
          status: 'active',
          assignedDate: '2024-02-01',
          lastInteraction: '2024-03-14T15:45:00Z'
        }
      ]
    },
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-03-15T14:30:00Z'
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    role: 'dealer',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=200',
    businessInfo: {
      companyName: 'Wilson Traders',
      phone: '+91 98765 43213',
      gstNumber: '29FGHIJ5678K1Z5',
      panNumber: 'FGHIJ5678K',
      address: '456 Trade Center, Delhi, India',
      salespeople: [
        {
          id: 'sp3',
          name: 'Charlie Brown',
          email: 'charlie@example.com',
          phone: '+91 98765 43214',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=200',
          status: 'active',
          assignedDate: '2024-01-20',
          lastInteraction: '2024-03-15T09:15:00Z'
        }
      ]
    },
    createdAt: '2024-01-15T00:00:00Z',
    lastLogin: '2024-03-15T11:45:00Z'
  },
  {
    id: '3',
    name: 'David Chen',
    email: 'david@example.com',
    role: 'architect',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=200',
    businessInfo: {
      companyName: 'Chen Architects',
      phone: '+91 98765 43215',
      gstNumber: '29LMNOP9012Q1Z5',
      panNumber: 'LMNOP9012Q',
      address: '789 Design Hub, Bangalore, India'
    },
    createdAt: '2024-02-01T00:00:00Z',
    lastLogin: '2024-03-14T16:30:00Z'
  },
  {
    id: '4',
    name: 'Emily Brown',
    email: 'emily@example.com',
    role: 'builder',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=200',
    businessInfo: {
      companyName: 'Brown Constructions',
      phone: '+91 98765 43216',
      gstNumber: '29QRSTU3456V1Z5',
      panNumber: 'QRSTU3456V',
      address: '321 Builder Complex, Chennai, India'
    },
    createdAt: '2024-02-15T00:00:00Z',
    lastLogin: '2024-03-13T13:45:00Z'
  },
  {
    id: '5',
    name: 'Raj Patel',
    email: 'raj@example.com',
    role: 'dealer',
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=300&h=200',
    businessInfo: {
      companyName: 'Patel Enterprises',
      phone: '+91 98765 43217',
      gstNumber: '29VWXYZ7890A1Z5',
      panNumber: 'VWXYZ7890A',
      address: '567 Market Complex, Ahmedabad, India',
      salespeople: []
    },
    createdAt: '2024-03-01T00:00:00Z',
    lastLogin: '2024-03-15T08:30:00Z'
  }
];

// Mock products data
export const mockProducts = [
  {
    id: '1',
    productId: 'MIL-MAR-001',
    seriesName: 'Marble Elite',
    finishedName: 'Carrara White',
    colors: [
      {
        name: 'White',
        image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&q=80&w=300&h=200'
      },
      {
        name: 'Beige',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=300&h=200'
      }
    ],
    categories: ['slabs', 'floor'],
    applicationType: 'floor',
    stock: 500,
    price: 2800,
    moq: 50,
    msp: 3200,
    status: 'active',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&q=80&w=300&h=200'
      }
    ],
    manufacturedIn: 'Italy',
    checkMaterialDepot: true,
    size: {
      length: 1200,
      width: 600,
      height: 10,
      unit: 'mm'
    },
    inventoryQty: 500,
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: '2',
    productId: 'MIL-SUB-001',
    seriesName: 'Metro Collection',
    finishedName: 'Glossy Blue',
    colors: [
      {
        name: 'Navy Blue',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=300&h=200'
      }
    ],
    categories: ['subways', 'wall'],
    applicationType: 'wall',
    stock: 1000,
    price: 850,
    moq: 100,
    msp: 1000,
    status: 'active',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=300&h=200'
      }
    ],
    manufacturedIn: 'Spain',
    checkMaterialDepot: true,
    size: {
      length: 200,
      width: 100,
      height: 8,
      unit: 'mm'
    },
    inventoryQty: 1000,
    createdAt: '2024-03-15T11:00:00Z',
    updatedAt: '2024-03-15T11:00:00Z'
  }
];

// Mock admins data
export const mockAdmins = [
  {
    id: '1',
    name: 'Super Admin',
    email: 'admin@milagro.com',
    role: 'superadmin',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastLogin: '2024-03-15T14:30:00Z',
    createdAt: '2024-01-01T00:00:00Z',
    permissions: ['all']
  },
  {
    id: '2',
    name: 'Test Admin',
    email: 'testadmin@milagro.com',
    role: 'admin',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastLogin: '2024-03-15T12:45:00Z',
    createdAt: '2024-02-01T00:00:00Z',
    permissions: ['users', 'products', 'orders']
  }
];