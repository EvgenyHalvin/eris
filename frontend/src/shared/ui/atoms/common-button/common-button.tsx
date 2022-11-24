import styles from './common-button.module.css';
import { TFontSize } from './types';

type Props = {
  text: string;
  isActive?: boolean;
  fontSizeVariant?: TFontSize;
  onClick: () => void;
};

export const CommonButton = ({
  text,
  isActive,
  fontSizeVariant = 'primary',
  onClick,
}: Props) => {
  const buttonStyle = isActive ? styles.wrapActive : styles.wrapCommon;
  const fontSizes: Record<TFontSize, string> = {
    large: styles.largeFontSize,
    primary: '',
    small: styles.smallFontSize,
  };
  const fontSize = fontSizes[fontSizeVariant];

  return (
    <button className={`${buttonStyle} ${fontSize}`} onClick={onClick}>
      {text}
    </button>
  );
};
