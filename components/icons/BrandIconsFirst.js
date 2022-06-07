import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

export default function BrandIconsFirst() {
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
        icon={['fab', 'html5']}
        size='3x'
        color='var(--color-primary)'
      />
      <FontAwesomeIcon
        icon={['fab', 'css3-alt']}
        size='3x'
        color='var(--color-primary)'
      />
      <FontAwesomeIcon
        icon={['fab', 'js']}
        size='3x'
        color='var(--color-primary)'
      />
      <FontAwesomeIcon
        icon={['fab', 'bootstrap']}
        size='3x'
        color='var(--color-primary)'
      />
      <FontAwesomeIcon
        icon={['fab', 'figma']}
        size='3x'
        color='var(--color-primary)'
      />
    </div>
  );
}
