import * as React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { Button } from "react-bulma-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

export const GithubButton = ({repo}) => {
  return (
    <Link to={repo} target="_blank">
      <Button size='small'>
        <span>View on GitHub</span>
        <FontAwesomeIcon icon={['fab', 'github']} style={{paddingLeft: '5px'}}></FontAwesomeIcon>
      </Button>
    </Link>
  );
}