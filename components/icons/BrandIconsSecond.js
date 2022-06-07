import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

export default function BrandIconsSecond() {
  return (
    <div
      style={{
        marginTop: 'var(--size-lg)',
        marginBottom: '0',
        display: 'flex',
        gap: 'var(--size)',
      }}
    >
      <FontAwesomeIcon
        icon={['fab', 'react']}
        size='3x'
        color='var(--color-primary)'
      />
      <FontAwesomeIcon
        icon={['fab', 'node-js']}
        size='3x'
        color='var(--color-primary)'
      />
    </div>
  );
}
