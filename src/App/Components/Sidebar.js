import { createStyles, Navbar, ScrollArea } from "@mantine/core";
import {
  IconBuilding,
  IconHome,
  IconLayoutDashboard,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { LinksGroup } from "./LinksGroup";

const mockdata = [
  {
    label: "Configuration",
    icon: IconSettings,
    initiallyOpened: true,
    links: [
      { label: "Roles", link: "/" },
      { label: "Lookup", link: "/" },
    ],
  },
  {
    label: "Dashboard",
    icon: IconHome,
    initiallyOpened: true,
    links: [
      { label: "Home", link: "/" },
      { label: "Vlogs", link: "/vlogs" },
      { label: "Offers", link: "/offers" },
    ],
  },
  { label: "Posts", icon: IconLayoutDashboard, link: "/posts" },
  { label: "Users", icon: IconUsers, link: "/posts" },
  { label: "Organisation", icon: IconBuilding, link: "/posts" },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

function Sidebar({ opened }) {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar
      height={800}
      width={{ sm: 250, lg: 250 }}
      p="md"
      className={classes.navbar}
      hiddenBreakpoint="sm"
      hidden={!opened}
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
export default Sidebar;
