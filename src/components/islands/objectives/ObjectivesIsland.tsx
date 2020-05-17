import { FC } from 'react';
import { IslandProps } from '../utils';
import IslandSVG from '../IslandSVG';
import { lvl1, lvl2, lvl3, lvl4, lvl5 } from './levels';

const ObjectivesIsland: FC<IslandProps> = ({
  status,
  targetLevel,
  levels,
  onLevelClick,
  ...svgProps
}) => {
  return (
    <IslandSVG
      width="235"
      height="276"
      viewBox="0 0 235 276"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      status={status}
      levels={levels}
      {...svgProps}
    >
      <path
        d="M1.00001 203.962L1 245.285L30.2416 275L70.8548 275L108.219 250.392L185.268 250.392L234.004 203.962L234.004 148.711L221.936 135.942L211.725 128.978L186.004 113.814L169.004 113.814L160.436 115.745L113.325 94.6197L98.7039 87.6552L88.7247 94.6197L58.7869 94.6197L50.4322 103.674L40.9171 103.674L40.9171 109.942L26.2963 123.871L26.2963 170.3L1.00001 203.962Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M1.00001 188.35L1 229.673L30.2416 259.388L70.8548 259.388L108.219 234.78L185.268 234.78L234.004 188.35L234.004 133.098L221.936 120.33L211.725 113.366L182.504 114.312L169.504 102.831L160.436 95.8429L152.004 95.8429L98.7039 72.0429L88.7247 79.0074L58.7869 79.0074L50.4322 88.0612L46.0041 90.352L40.9171 94.3293L26.2963 108.258L26.2963 154.688L1.00001 188.35Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M49.004 112L45.0042 138"
        stroke="#EAEAEA"
        strokeDasharray="2 2"
      />
      <path
        d="M16.1009 203.665L14.0687 207.93H15.23L13.3912 211.235H14.4558L13.0042 214.647H19.0042L17.2622 211.235H18.4235L16.9719 207.93H18.0364L16.1009 203.665Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M27.6493 200.67L24.6009 206.873H26.3429L23.5848 211.681H25.1816L23.0042 216.644H32.0042L29.3912 211.681H31.1332L28.9558 206.873H30.5525L27.6493 200.67Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M78.1332 113.813L75.4235 119.241H76.9719L74.5203 123.448H75.9396L74.0042 127.79H82.0042L79.6816 123.448H81.23L79.2945 119.241H80.7138L78.1332 113.813Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M177.558 89.8535L173.004 94.3149L176.474 102.832H185.504L191.004 89.8535H177.558Z"
        stroke="#EAEAEA"
      />
      <path d="M191.504 89.3545V124.796" stroke="#EAEAEA" />
      <path
        d="M96.0042 90.6165L107.888 61.5918L120.196 90.6165L116.588 94.43H99.1873L96.0042 90.6165Z"
        fill={status === 'done' ? '#0F8CFF' : '#26252b'}
        stroke="#EAEAEA"
      />
      <path
        d="M99.0042 135.278V94.8447H117.004V135.278H99.0042Z"
        stroke="#EAEAEA"
      />
      <path d="M102.779 94.209V135.777" stroke="#EAEAEA" />
      <path
        d="M173.004 106.705V135.278H168.754V106.705H173.004Z"
        fill="#2B2A30"
      />
      <path
        d="M156.004 106.705V135.278H160.254H168.754M164.504 106.705H168.754M168.754 106.705H173.004V135.278H168.754M168.754 106.705V135.278"
        stroke="#EAEAEA"
      />
      <path
        d="M123.504 78.3721L131.132 71.8828H151.004L144.308 78.8713L123.504 78.3721Z"
        stroke="#EAEAEA"
      />
      <path
        d="M145.004 95.8432V79.0062L152.004 71.8828V95.8432H145.004Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M123.004 78.8711H145.004V95.8431H137.746V91.0561L136.159 89.533H132.984L131.396 91.0561V95.8431H123.004V78.8711Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M159.004 1V8.32124L169.004 4.66062L159.004 1Z"
        fill={status === 'done' ? '#0F8CFF' : '#26252b'}
      />
      <path
        d="M159.004 8.32124V1L169.004 4.66062L159.004 8.32124ZM159.004 8.32124V11.9819"
        stroke="#EAEAEA"
      />
      <path
        d="M135.893 32.9473L129.004 50.0302L131.449 52.9143H140.337L143.004 50.0302L135.893 32.9473Z"
        stroke="#EAEAEA"
      />
      <path
        d="M140.504 55.9092H150.004L143.003 64.8943H140.004H131.504"
        stroke="#EAEAEA"
      />
      <path
        d="M173.398 48.9209L180.004 63.6201L177.873 66.1045V89.292L173.184 93.8467L168.922 83.9092V66.1045L167.004 63.6201L173.398 48.9209Z"
        fill="#2B2A30"
      />
      <path
        d="M177.873 66.1045L180.004 63.6201L173.398 48.9209L167.004 63.6201L168.922 66.1045M177.873 66.1045H168.922M177.873 66.1045V89.292L173.184 93.8467L168.922 83.9092V66.1045"
        stroke="#EAEAEA"
      />
      <path
        d="M131.504 53.4132V65.3934M131.504 72.3819V65.3934M131.504 65.3934L136.248 60.2015L140.493 55.8801V52.9141"
        stroke="#EAEAEA"
      />
      <path
        d="M108.004 52.9141V59.0618L115.004 55.7515L108.004 52.9141Z"
        fill={status === 'done' ? '#0F8CFF' : '#26252b'}
      />
      <path
        d="M108.004 59.0618V52.9141L115.004 55.7515L108.004 59.0618ZM108.004 59.0618V61.8992"
        stroke="#EAEAEA"
      />
      <path
        d="M150.966 72.3963L151.179 41.4648H166.882V66.0405H157.969L150.966 72.3963Z"
        stroke="#EAEAEA"
      />
      <path
        d="M157.969 66.041L150.966 72.3968H164.519L169.004 66.041H157.969Z"
        stroke="#EAEAEA"
      />
      <path
        d="M165.004 64.8945V71.7254L172.004 68.0472L165.004 64.8945Z"
        fill={status === 'done' ? '#0F8CFF' : '#26252b'}
      />
      <path
        d="M165.004 71.7254V64.8945L172.004 68.0472L165.004 71.7254ZM165.004 71.7254V74.878"
        stroke="#EAEAEA"
      />
      <path d="M143.004 71.883V64.8945" stroke="#EAEAEA" />
      <path
        d="M168.792 38.7107L159.242 11.3809L149.056 38.7107L151.178 41.253H167.094L168.792 38.7107Z"
        fill={status === 'done' ? '#0F8CFF' : '#26252b'}
        stroke="#EAEAEA"
      />
      <path
        d="M156.772 50.4992V45.2341L157.158 44.7197H157.969H158.781L159.167 45.2341V50.4992H156.772Z"
        stroke="#EAEAEA"
      />
      <path
        d="M10.0042 176.211L18.0042 166.227H45.5042L50.5042 166.227H74.0042V146.26H170.004H173.504V193.183H185.504V154.746H214.004V143.265H198.004V135.777H223.504V161.235V165.229H194.504V202.168H161.004V156.244H83.5042V176.211H10.0042Z"
        fill={status === 'done' ? '#0F8CFF' : '#26252b'}
      />
      <path
        d="M223.504 161.235H194.504V165.229M223.504 161.235V135.777H198.004V143.265H214.004V154.746H185.504V193.183H173.504M223.504 161.235V165.229H194.504M173.504 193.183V146.26H170.004M173.504 193.183H170.004V146.26M194.504 165.229V202.168H161.004V156.244H83.5042V176.211H10.0042L18.0042 166.227H45.5042L50.5042 166.227H74.0042V146.26H170.004"
        stroke="#EAEAEA"
      />
      <rect
        x="169.504"
        y="146.261"
        width="4"
        height="46.9208"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <rect
        x="194.504"
        y="161.236"
        width="29"
        height="3.99175"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M108.004 192.683L105.939 187.691H102.266H98.5943L94.0042 192.683H101.004H108.004Z"
        fill="#2B2A30"
      />
      <path
        d="M102.266 187.691H105.939L108.004 192.683H101.004M102.266 187.691H98.5943L94.0042 192.683H101.004M102.266 187.691L101.004 192.683"
        stroke="#EAEAEA"
      />
      <path
        d="M32.8235 212.65L28.3267 218.02L27.0042 219.298V233.616H43.0074H59.0106H68.0042L60.0687 218.02H54.7783L48.6945 212.65H32.8235Z"
        fill="#2B2A30"
      />
      <path
        d="M32.8235 212.65L28.3267 218.02L27.0042 219.298V233.616H43.0074M32.8235 212.65H48.6945L54.7783 218.02M32.8235 212.65L43.0074 221.343V233.616M54.7783 218.02H60.0687M54.7783 218.02L53.9848 223.389M60.0687 218.02L68.0042 233.616H59.0106M60.0687 218.02L53.9848 223.389M53.9848 223.389L59.0106 233.616M59.0106 233.616H43.0074"
        stroke="#EAEAEA"
      />
      <path
        d="M127.722 163.731H111.504L118.089 147.005L126.201 135.347L133.807 130.785H148.004L144.161 135.347V138.895L133.807 152.073L130.765 163.731H127.722Z"
        fill="#2B2A30"
      />
      <path
        d="M127.722 163.731H111.504L118.089 147.005L126.201 135.347L133.807 130.785H148.004L144.161 135.347M127.722 163.731L131.779 150.046L144.161 135.347M127.722 163.731H130.765L133.807 152.073L144.161 138.895V135.347"
        stroke="#EAEAEA"
      />
      <path
        d="M178.341 115.404L178.978 114.557H180.039H181.1L181.737 115.404V121.336H178.341V115.404Z"
        fill="#EAEAEA"
      />
      <path
        d="M120.598 106.52H114.004V135.278H125.504V123.797L127.405 121.457H140.168L144.004 123.797V135.278H155.641V123.55V100.835L149.102 101.28V106.52H144.635V101.28H139.53V106.52H135.063V101.28H129.958V106.52H125.278V101.28H120.598V106.52Z"
        fill="#2B2A30"
      />
      <path
        d="M176.542 111.969H172.681V135.401L201.004 146.759V107.777H196.112V111.969H191.007V108.406H185.901V111.969H181.009V108.406H176.542V111.969Z"
        fill="#2B2A30"
      />
      <path
        d="M120.598 106.52H114.004V135.278H125.504V123.797L127.405 121.457H140.168L144.004 123.797V135.278H155.641V123.55V100.835L149.102 101.28V106.52H144.635V101.28H139.53V106.52H135.063V101.28H129.958V106.52H125.278V101.28H120.598V106.52Z"
        stroke="#EAEAEA"
      />
      <path
        d="M176.542 111.969H172.681V135.401L201.004 146.759V107.777H196.112V111.969H191.007V108.406H185.901V111.969H181.009V108.406H176.542V111.969Z"
        stroke="#EAEAEA"
      />
      <path
        d="M125.504 135.279L133.504 130.786M133.504 130.786V121.801M133.504 130.786H142.004"
        stroke="#EAEAEA"
      />
      <path
        d="M147.504 116.309V110.879L147.984 110.32H149.004H150.024L150.504 110.879V116.309H147.504Z"
        stroke="#EAEAEA"
      />
      <path
        d="M132.504 116.309V110.879L132.984 110.32H134.004H135.024L135.504 110.879V116.309H132.504Z"
        stroke="#EAEAEA"
      />
      <path
        d="M118.504 116.309V110.879L118.984 110.32H120.004H121.024L121.504 110.879V116.309H118.504Z"
        stroke="#EAEAEA"
      />
      <path
        d="M193.504 125.293V118.972L194.004 118.307H195.004H196.004L196.504 118.972V125.293H193.504Z"
        stroke="#EAEAEA"
      />
      <path
        d="M182.504 123.297V116.976L183.004 116.311H184.004H185.004L185.504 116.976V123.297H182.504Z"
        stroke="#EAEAEA"
      />
      <path
        d="M67.0042 135.278L72.8202 124.422H80.7513L86.0386 113.813H96.6133L102.429 124.422H107.188L107.261 124.552L113.004 135.278H104.504H67.0042Z"
        fill="#2B2A30"
      />
      <path
        d="M86.0386 113.813L80.7513 124.422H72.8202L67.0042 135.278H104.504M86.0386 113.813H96.6133L102.429 124.422M86.0386 113.813L96.6133 129.727L102.429 124.422M102.429 124.422H107.188L107.261 124.552M107.261 124.552L113.004 135.278H104.504M107.261 124.552L101.901 129.727L104.504 135.278"
        stroke="#EAEAEA"
      />
      <path
        d="M218.004 147.758L213.579 139.679H207.544L203.521 131.784H195.475L191.05 139.679L183.004 143.627V147.758H189.472H218.004Z"
        fill="#2B2A30"
      />
      <path
        d="M203.521 131.784L207.544 139.679H213.579L218.004 147.758H189.472M203.521 131.784H195.475L191.05 139.679M203.521 131.784L195.475 143.627M191.05 139.679L195.475 143.627M191.05 139.679L183.004 143.627V147.758H189.472M195.475 143.627L189.472 147.758"
        stroke="#EAEAEA"
      />
      <path
        d="M153.004 102.707L164.898 73.8799L177.004 103.358L173.181 106.825H155.978L153.004 102.707Z"
        fill={status === 'done' ? '#0F8CFF' : '#26252b'}
        stroke="#EAEAEA"
      />
      <path
        d="M138.101 177.708L136.069 181.973H137.23L135.391 185.278H136.456L135.004 188.69H141.004L139.262 185.278H140.424L138.972 181.973H140.036L138.101 177.708Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M119.004 196.677V190.047L129.441 179.705L138.004 188.987V196.677H119.004Z"
        fill="#2B2A30"
      />
      <path
        d="M119.004 196.677V190.047L129.441 179.705M119.004 196.677L129.976 188.987L129.441 179.705M119.004 196.677H138.004V188.987L129.441 179.705"
        stroke="#EAEAEA"
      />
      <path
        d="M20.1009 208.657L18.0687 212.922H19.23L17.3912 216.227H18.4558L17.0042 219.639H23.0042L21.2622 216.227H22.4235L20.9719 212.922H22.0364L20.1009 208.657Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M139.101 188.689L137.069 192.954H138.23L136.391 196.259H137.456L136.004 199.671H142.004L140.262 196.259H141.424L139.972 192.954H141.036L139.101 188.689Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M63.1332 120.802L60.4235 126.23H61.9719L59.5203 130.436H60.9396L59.0042 134.779H67.0042L64.6816 130.436H66.23L64.2945 126.23H65.7138L63.1332 120.802Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path
        d="M70.1009 104.828L68.0687 108.705H69.23L67.3912 111.71H68.4558L67.0042 114.812H73.0042L71.2622 111.71H72.4235L70.9719 108.705H72.0364L70.1009 104.828Z"
        fill="#2B2A30"
        stroke="#EAEAEA"
      />
      <path d="M46.004 156L53.504 188" stroke="#EAEAEA" strokeDasharray="2 2" />
      <path d="M63.004 204L82.004 220" stroke="#EAEAEA" strokeDasharray="2 2" />
      <path
        d="M152.004 219L100.004 224"
        stroke="#EAEAEA"
        strokeDasharray="2 2"
      />
      <lvl1.Marker
        transform="translate(44 94)"
        status={levels.lvl1?.status}
        onClick={() => onLevelClick(lvl1)}
        focused={targetLevel?.level === lvl1}
        level={lvl1}
      />
      <lvl2.Marker
        transform="translate(37 138)"
        status={levels.lvl2?.status}
        onClick={() => onLevelClick(lvl2)}
        focused={targetLevel?.level === lvl2}
        level={lvl2}
      />
      <lvl3.Marker
        transform="translate(50 187)"
        status={levels.lvl3?.status}
        onClick={() => onLevelClick(lvl3)}
        focused={targetLevel?.level === lvl3}
        level={lvl3}
      />
      <lvl4.Marker
        transform="translate(83 217)"
        status={levels.lvl4?.status}
        onClick={() => onLevelClick(lvl4)}
        focused={targetLevel?.level === lvl4}
        level={lvl4}
      />
      <lvl5.Marker
        transform="translate(154 210)"
        status={levels.lvl5?.status}
        onClick={() => onLevelClick(lvl5)}
        focused={targetLevel?.level === lvl5}
        level={lvl5}
      />
    </IslandSVG>
  );
};

export default ObjectivesIsland;