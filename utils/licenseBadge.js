// Generate an array of license info

const licenseBadgeArr = [
  {
    name: "",
    badge: "",
    link: "",
  },
  {
    name: "Apache 2.0 License",
    badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    name: "Boost Software License 1.0",
    badge: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
    link: "https://www.boost.org/LICENSE_1_0.txt",
  },
  {
    name: "BSD 3-Clause License",
    badge: "https://img.shields.io/badge/License-BSD_3--Clause-orange.svg",
    link: "https://opensource.org/licenses/BSD-3-Clause",
  },
  {
    name: "BSD 2-Clause License",
    badge: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
    link: "https://opensource.org/licenses/BSD-2-Clause",
  },
  {
    name: "CC0-1.0",
    badge: "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
    link: "http://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    name: "CC BY 4.0",
    badge: "https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg",
    link: "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    name: "CC BY-SA 4.0",
    badge: "https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg",
    link: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    name: "CC BY-NC 4.0",
    badge: "https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg",
    link: "https://creativecommons.org/licenses/by-nc/4.0/",
  },
  {
    name: "CC BY-ND 4.0",
    badge: "https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg",
    link: "https://creativecommons.org/licenses/by-nd/4.0/",
  },
  {
    name: "BY-NC-SA 4.0",
    badge:
      "https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg",
    link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  {
    name: "CC BY-NC-ND 4.0",
    badge:
      "https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg",
    link: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  },
  {
    name: "Eclipse Public License 1.0",
    badge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
    link: "https://opensource.org/licenses/EPL-1.0",
  },
  {
    name: "GNU GPL v3",
    badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    link: "https://www.gnu.org/licenses/gpl-3.0",
  },
  {
    name: "GNU GPL v2",
    badge: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
  {
    name: "GNU AGPL v3",
    badge: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
    link: "https://www.gnu.org/licenses/agpl-3.0",
  },
  {
    name: "GNU LGPL v3",
    badge: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
    link: "https://www.gnu.org/licenses/lgpl-3.0",
  },
  {
    name: "GNU FDL v1.3",
    badge: "https://img.shields.io/badge/License-FDL_v1.3-blue.svg",
    link: "https://www.gnu.org/licenses/fdl-1.3",
  },
  {
    name: "The Hippocratic License 2.1",
    badge: "https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg",
    link: "https://firstdonoharm.dev",
  },
  {
    name: "The Hippocratic License 3.0",
    badge: "https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg",
    link: "https://firstdonoharm.dev",
  },
  {
    name: "IBM Public License Version 1.0",
    badge: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
    link: "https://opensource.org/licenses/IPL-1.0",
  },
  {
    name: "ISC License (ISC)",
    badge: "https://img.shields.io/badge/License-ISC-blue.svg",
    link: "https://opensource.org/licenses/ISC",
  },
  {
    name: "The MIT License",
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "Mozilla Public License 2.0",
    badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
  {
    name: "Open Data Commons Attribution",
    badge: "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg",
    link: "https://opendatacommons.org/licenses/by/",
  },
  {
    name: "Open Database License (ODbL)",
    badge: "https://img.shields.io/badge/License-ODbL-brightgreen.svg",
    link: "https://opendatacommons.org/licenses/odbl/",
  },
  {
    name: "Public Domain Dedication and License (PDDL)",
    badge: "https://img.shields.io/badge/License-PDDL-brightgreen.svg",
    link: "https://opendatacommons.org/licenses/pddl/",
  },
  {
    name: "The Perl License",
    badge: "https://img.shields.io/badge/License-Perl-0298c3.svg",
    link: "https://opensource.org/licenses/Artistic-2.0",
  },
  {
    name: "The Artistic License 2.0",
    badge: "https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg",
    link: "https://opensource.org/licenses/Artistic-2.0",
  },
  {
    name: "SIL Open Font License 1.1",
    badge: "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg",
    link: "https://opensource.org/licenses/OFL-1.1",
  },
  {
    name: "The Unlicense",
    badge: "https://img.shields.io/badge/license-Unlicense-blue.svg",
    link: "http://unlicense.org/",
  },
  {
    name: "The Do What the Fuck You Want to Public License (WTFPL)",
    badge: "https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
    link: "http://www.wtfpl.net/about/",
  },
  {
    name: "The zlib/libpng License",
    badge: "https://img.shields.io/badge/License-Zlib-lightgrey.svg",
    link: "https://opensource.org/licenses/Zlib",
  },
];

module.exports = licenseBadgeArr;
