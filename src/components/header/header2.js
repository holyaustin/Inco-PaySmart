/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Button } from 'theme-ui';
import { Fragment, useState } from 'react';
import Link from 'next/link'
import Sticky from 'react-stickynode';
import Image from 'components/image';
// import Logo from 'assets/images/logosmallblack.png';
import TopBar from 'components/topbar';
import LockIcon from 'components/icons/lock';
import HamburgerMenu from 'components/hamburger';
// import Navbar2 from './navbar2';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  //  navigate = useRouter();
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };
  const toggleMobileMenu = () => {
    setState((prev) => {
      return {
        ...prev,
        isMobileMenu: !prev.isMobileMenu,
      };
    });
  };
  const handleCloseMenu = () => {
    setState({
      ...state,
      isMobileMenu: false,
    });
  };

  const logout = async () => {
        navigate.push('/')
  };

  return (
    <Fragment>
      {/** 
      <TopBar />
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <Box
          as="header"
          sx={styles.header}
          className={state.isSticky ? 'is-sticky' : ''}
        >
          <Container sx={styles.container}>
          <Image src="/images/logo2.png" loading="lazy" sx={styles.logo} alt="logo" />
          <div sx={styles.navbar}>
          <Link href="/">
          <a>Home</a>
          </Link>
          <Link href="/addpool">
          <a>Create Pool (Native) INCO</a>
          </Link>
          <Link href="/addtoken">
          <a>Create Pool (ERC20) PST Token</a>
          </Link>
          <Link href="/minttoken">
          <a>Mint PST Token</a>
          </Link>
          <Link href="https://web3chat-kezayya.vercel.app/">
          <a target="_blank">Chat</a>
          </Link>
          <Link href="/analytics">
          <a>Analytics</a>
          </Link>
          </div>

            <Flex sx={styles.buttonGroup}>
            <Link href="/">
      
         
              <Button
                variant="text"
                sx={{
                  ...styles.joinCommunity,
                  backgroundColor: state.isSticky ? 'primary' : 'white',
                  color: state.isSticky ? 'white' : 'primary',
                }} onlick={logout}
              >
                <a>Logout </a>
              </Button>
              </Link>
            </Flex>

            <HamburgerMenu
              sx={styles.hamburger}
              isSticky={state.isSticky}
              isOpen={state.isMobileMenu}
              toggleMobileMenu={toggleMobileMenu}
            />
          </Container>
        </Box>
      </Sticky>
*/}

      
<nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                {/** <h2 className="text-2xl font-bold text-red-500">Galleria</h2> **/}
                <Image src="/images/logo2.png" loading="lazy" sx={styles.logo} alt="logo" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pl-8 font-semibold text-xl pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                
                <li className="text-gray-600 hover:text-blue-600">
                <Link href="/">
                <a>Home</a>
                </Link>
                </li>

                <li className="text-gray-600 hover:text-blue-600">
                <Link href="/addpool">
                <a>Create Pool (Native) INCO</a>
                  </Link>
                </li>

                <li className="text-gray-600 hover:text-blue-600">
          <Link href="/addtoken">
          <a>Create Pool (ERC20) PST Token</a>
                  </Link>
                </li>
                
        <li className="text-gray-600 hover:text-blue-600">
          <Link href="/minttoken">
          <a>Mint PST Token</a>
          </Link>
          </li>
                
            <li className="text-gray-600 hover:text-blue-600">
          <Link href="https://web3chat-kezayya.vercel.app/">
          <a target="_blank">Chat</a>
          </Link>
          </li>
                
          <li className="text-gray-600 hover:text-blue-600">  
          <Link href="/analytics">
          <a>Analytics</a>
          </Link>
          </li>
                            
                       </ul>
                    </div>
          </div>
          
          <Flex sx={styles.buttonGroup}>
            <Link href="/">
      
         
              <Button
                variant="text"
                sx={{
                  ...styles.joinCommunity,
                  backgroundColor: state.isSticky ? '#FFF' : 'blue',
                  color: state.isSticky ? 'blue' : '#FFF',
                }} onClick={logout}
              >
                <a>Logout </a>
              </Button>
              </Link>
          </Flex>
          
            </div>
        </nav>


    </Fragment>
  );
}

const styles = {
    navbar: {
      display: [null, null, null, null, null, 'flex'],
      alignItems: [null, null, null, 'center'],
      flexGrow: [null, null, null, 1],
      fontSize: ['10px', null, null, 4],
      a: {
        color: 'white',
        cursor: 'pointer',
        '+ a': {
          ml: [null, null, null, null, null, 6],
        },
      },
      '@media only screen and (max-width: 1024px)': {
        position: 'absolute',
        backgroundColor: 'white',
        boxShadow: '0px 11px 30px rgba(51, 83, 145, 0.07)',
        width: '100%',
        left: 0,
        top: 70,
        opacity: 0,
        visibility: 'hidden',
        transform: 'scaleY(0)',
        transformOrigin: 'top left 0',
        transition: '0.3s ease 0s',
        '&.is-sticky': {
          borderTop: '1px solid #f3f3f3',
        },
        '&.is-mobile': {
          opacity: 1,
          visibility: 'visible',
          transform: 'scaleY(1)',
        },
        a: {
          fontWeight: 500,
          lineHeight: 1,
          color: 'textSecondary',
          display: 'block',
          padding: 3,
          '+ a': {
            borderTop: '1px solid #f3f3f3',
          },
        },
      },
      '&.is-sticky': {
        top: 60,
        a: {
          color: 'text',
        },
        '.active': {
          color: 'primary',
        },
      },
    },


  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 4,
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: 'white',
      boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
      paddingTop: '15px',
      paddingBottom: '15px',
    },
    '&.is-mobile-menu': {
      backgroundColor: 'white',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 3, null, 5],
    height: ['25px', null, null, '75px'],
  },
  buttonGroup: {
    alignItems: 'center',
    marginLeft: 'auto',
    button: {
      fontWeight: 500,
    },
  },
  login: {
    display: ['none', null, null, null, 'flex'],
    color: 'white',
    p: 0,
    mr: [null, null, null, null, 5],
    fontSize: ['10px', null, null, 4],
    svg: {
      mr: 2,
    },
  },
  joinCommunity: {
    backgroundColor: 'white',
    minHeight: [30, null, null, 40],
    p: ['0 12px', null, null, '0 14px'],
    fontSize: ['10px', null, null, 4],
  },
  hamburger: {
    display: [null, null, null, null, null, 'none'],
  },
};
