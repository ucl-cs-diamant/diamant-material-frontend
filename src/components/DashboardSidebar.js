import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '../../public/static/images/avatars/avatar_6.png',
  student_id: "12313",
  name: "hello",
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/leaderboards',
    icon: UsersIcon,
    title: 'Leaderboards'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error'
  }
];

class DashboardSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      github_username: "",
      student_id: ""
    }
  }

  componentDidMount() {
    fetch('http://192.168.135.128:8000/users/2/?format=json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ github_username: data.github_username });
        this.setState({ student_id: data.student_id });
      });
    if (this.props.openMobile && this.props.onMobileClose) {
      this.props.onMobileClose();
    }
  }

  render() {
    const content = (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            p: 2
          }}
        >
          <Avatar
            component={RouterLink}
            src={user.avatar}
            sx={{
              cursor: 'pointer',
              width: 64,
              height: 64
            }}
            to="/app/account"
          />
          <Typography
            color="textPrimary"
            variant="h5"
          >
            {this.state.github_username}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {this.state.student_id}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <List>
            {items.map((item) => (
              <NavItem
                href={item.href}
                key={item.title}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </List>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
      </Box>
    );

    return (
      <>
        <Hidden lgUp>
          <Drawer
            anchor="left"
            onClose={this.props.onMobileClose}
            open={this.props.openMobile}
            variant="temporary"
            PaperProps={{
              sx: {
                width: 256
              }
            }}
          >
            {content}
          </Drawer>
        </Hidden>
        <Hidden xlDown>
          <Drawer
            anchor="left"
            open
            variant="persistent"
            PaperProps={{
              sx: {
                width: 256,
                top: 64,
                height: 'calc(100% - 64px)'
              }
            }}
          >
            {content}
          </Drawer>
        </Hidden>
      </>
    );
  }
}
//
// const DashboardSidebar = ({ onMobileClose, openMobile }) => {
//   const location = useLocation();
//
//   useEffect(() => {
//     if (openMobile && onMobileClose) {
//       onMobileClose();
//     }
//   }, [location.pathname]);
//
//   const content = (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100%'
//       }}
//     >
//       <Box
//         sx={{
//           alignItems: 'center',
//           display: 'flex',
//           flexDirection: 'column',
//           p: 2
//         }}
//       >
//         <Avatar
//           component={RouterLink}
//           src={user.avatar}
//           sx={{
//             cursor: 'pointer',
//             width: 64,
//             height: 64
//           }}
//           to="/app/account"
//         />
//         <Typography
//           color="textPrimary"
//           variant="h5"
//         >
//           {user.student_id}
//         </Typography>
//         <Typography
//           color="textSecondary"
//           variant="body2"
//         >
//           {user.name}
//         </Typography>
//       </Box>
//       <Divider />
//       <Box sx={{ p: 2 }}>
//         <List>
//           {items.map((item) => (
//             <NavItem
//               href={item.href}
//               key={item.title}
//               title={item.title}
//               icon={item.icon}
//             />
//           ))}
//         </List>
//       </Box>
//       <Box sx={{ flexGrow: 1 }} />
//       <Box
//         sx={{
//           backgroundColor: 'background.default',
//           m: 2,
//           p: 2
//         }}
//       >
//         <Typography
//           align="center"
//           gutterBottom
//           variant="h4"
//         >
//           Need more?
//         </Typography>
//         <Typography
//           align="center"
//           variant="body2"
//         >
//           Upgrade to PRO version and access 20 more screens
//         </Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             pt: 2
//           }}
//         >
//           <Button
//             color="primary"
//             component="a"
//             href="https://react-material-kit.devias.io"
//             variant="contained"
//           >
//             See PRO version
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
//
//   return (
//     <>
//       <Hidden lgUp>
//         <Drawer
//           anchor="left"
//           onClose={onMobileClose}
//           open={openMobile}
//           variant="temporary"
//           PaperProps={{
//             sx: {
//               width: 256
//             }
//           }}
//         >
//           {content}
//         </Drawer>
//       </Hidden>
//       <Hidden xlDown>
//         <Drawer
//           anchor="left"
//           open
//           variant="persistent"
//           PaperProps={{
//             sx: {
//               width: 256,
//               top: 64,
//               height: 'calc(100% - 64px)'
//             }
//           }}
//         >
//           {content}
//         </Drawer>
//       </Hidden>
//     </>
//   );
// };
//
// DashboardSidebar.propTypes = {
//   onMobileClose: PropTypes.func,
//   openMobile: PropTypes.bool,
//   github_username: PropTypes.string,
//   student_id: PropTypes.string
// };
//
// DashboardSidebar.defaultProps = {
//   onMobileClose: () => {
//   },
//
//   openMobile: false,
//   github_username: 'a',
//   student_id: 'b'
// };

export default DashboardSidebar;
