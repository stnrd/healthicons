import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HivSelfTest extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HivSelfTest({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.1216 21C33.1216 20.6494 33.0615 20.3128 32.9509 20H38C39.933 20 41.5 18.433 41.5 16.5C41.5 14.567 39.933 13 38 13H24.0817L26.648 11.9672C28.7158 11.135 29.2513 8.45503 27.662 6.89207C26.7973 6.04168 25.5154 5.77505 24.3833 6.21013L12.7348 10.6869C8.3763 12.3619 5.5 16.5487 5.5 21.218C5.5 27.4489 10.5511 32.5 16.7821 32.5H26.2122C27.8692 32.5 29.2122 31.1565 29.2122 29.4998C29.2122 29.1491 29.152 28.8125 29.0414 28.4996H29.4056C31.0624 28.4996 32.4056 27.1565 32.4056 25.4996V25.0774C32.4056 24.4844 32.2335 23.9316 31.9367 23.4662C32.6568 22.9182 33.1216 22.0521 33.1216 21.0774V21ZM39.5 16.5C39.5 15.6716 38.8284 15 38 15H24.0817C21.882 15 21.2943 11.9659 23.335 11.1446L25.9012 10.1118C26.6321 9.81767 26.8214 8.87046 26.2596 8.31804C25.954 8.01747 25.5009 7.92323 25.1008 8.07701L13.4522 12.5537C9.86641 13.9318 7.5 17.3764 7.5 21.218C7.5 26.3443 11.6557 30.5 16.7821 30.5H26.2122C26.7643 30.5 27.2122 30.0522 27.2122 29.4998C27.2122 28.9474 26.7643 28.4996 26.2122 28.4996H22.7781V26.4996H29.4056C29.9579 26.4996 30.4056 26.0519 30.4056 25.4996V25.0774C30.4056 24.5251 29.9579 24.0774 29.4056 24.0774H24.9379V22.0774H30.1216C30.6739 22.0774 31.1216 21.6296 31.1216 21.0774V21C31.1216 20.4477 30.6739 20 30.1216 20H24.9379V18H34.6138C34.5401 17.8436 34.5 17.6753 34.5 17.5C34.5 16.6716 35.3955 16 36.5 16C37.6046 16 38.5 16.6716 38.5 17.5C38.5 17.6542 38.469 17.8029 38.4114 17.9429C39.0398 17.7641 39.5 17.1858 39.5 16.5Z" fill="#333333"/>
<path d="M39.5 26.1429C39.5 27.7429 38.18 29 36.5 29C34.82 29 33.5 27.7429 33.5 26.1429C33.5 24.5429 36.5 21 36.5 21C36.5 21 39.5 24.6571 39.5 26.1429Z" fill="#333333"/>
<path d="M38.7051 41.3849C38.5525 41.7509 38.1981 41.9923 37.8017 42.0001C37.4052 42.0079 37.0416 41.7807 36.8748 41.4209L34.0928 35.4209C33.8605 34.9199 34.0783 34.3254 34.5794 34.093C35.0804 33.8607 35.6749 34.0786 35.9072 34.5796L37.7331 38.5176L39.3589 34.6156C39.5713 34.1058 40.1568 33.8648 40.6666 34.0772C41.1764 34.2896 41.4175 34.8751 41.2051 35.3849L38.7051 41.3849Z" fill="#333333"/>
<path d="M20.5 34.0002C19.9477 34.0002 19.5 34.4479 19.5 35.0002V41.0002C19.5 41.5525 19.9477 42.0002 20.5 42.0002C21.0523 42.0002 21.5 41.5525 21.5 41.0002V39.0003H24.5V41.0003C24.5 41.5525 24.9477 42.0003 25.5 42.0003C26.0523 42.0003 26.5 41.5525 26.5 41.0003V35.0003C26.5 34.448 26.0523 34.0003 25.5 34.0003C24.9477 34.0003 24.5 34.448 24.5 35.0003V37.0003H21.5V35.0002C21.5 34.4479 21.0523 34.0002 20.5 34.0002Z" fill="#333333"/>
<path d="M28 35.0003C28 34.448 28.4477 34.0003 29 34.0003H32C32.5523 34.0003 33 34.448 33 35.0003C33 35.5525 32.5523 36.0003 32 36.0003H31.5V40.0003H32C32.5523 40.0003 33 40.448 33 41.0003C33 41.5525 32.5523 42.0003 32 42.0003H29C28.4477 42.0003 28 41.5525 28 41.0003C28 40.448 28.4477 40.0003 29 40.0003H29.5V36.0003H29C28.4477 36.0003 28 35.5525 28 35.0003Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}