import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Traumatism extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Traumatism({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0001 12C24.2092 12 26.0001 10.2091 26.0001 8C26.0001 5.79086 24.2092 4 22.0001 4C19.7909 4 18.0001 5.79086 18.0001 8C18.0001 10.2091 19.7909 12 22.0001 12Z" fill="#333333"/>
<path d="M26.0567 15.0292C25.7154 15.0099 25.3633 15 25.0001 15H17.0001C16.1217 15 15.3009 15.0764 14.587 15.2862C13.8741 15.4958 13.0905 15.8929 12.5605 16.6617C12.0082 17.4628 11.9502 18.3459 12.0694 19.0665C12.1829 19.7534 12.4701 20.4024 12.7789 20.9638C13.3964 22.0866 14.3771 23.3422 15.4262 24.6057C15.5827 24.7942 15.7431 24.9856 15.9064 25.1794L18.7455 22.3404C18.6638 22.2429 18.5832 22.1463 18.5037 22.0506C17.4512 20.7828 16.6975 19.7884 16.2838 19.0362L16.2799 19.0292C16.4736 19.0114 16.7113 19 17.0001 19H17.8926L19.8145 21.2713L26.0567 15.0292Z" fill="#333333"/>
<path d="M20.0442 23.8701L17.2072 26.7071C17.7824 27.3799 18.3718 28.0702 18.9637 28.7804C19.6708 29.6289 20.9319 29.7436 21.7805 29.0364C22.629 28.3293 22.7437 27.0682 22.0365 26.2196C21.4022 25.4584 20.7731 24.7225 20.1779 24.0264L20.0442 23.8701Z" fill="#333333"/>
<path d="M28.5477 15.3666C31.2728 15.9784 33.0901 17.2863 34.2557 18.7586C35.0295 19.736 35.4579 20.7139 35.6943 21.4539C35.8129 21.8252 35.8851 22.1426 35.9288 22.3793C35.9507 22.4979 35.9656 22.5971 35.9756 22.6737C36.0015 22.872 35.9959 22.8483 35.9915 22.8235C35.9892 22.8092 35.9885 22.8053 35.9887 22.8068L35.9915 22.8235L35.9932 22.8339C36.0849 23.9347 35.2669 24.9014 34.1662 24.9931C33.0744 25.0841 32.1145 24.2801 32.0094 23.193L32.0092 23.1915C32.0078 23.1802 32.0036 23.1506 31.9952 23.1051C31.9783 23.0137 31.9451 22.8623 31.884 22.6711C31.761 22.2861 31.5332 21.764 31.1195 21.2414C30.604 20.5902 29.6874 19.7954 28.0001 19.3485V42C28.0001 43.0722 27.1545 43.9537 26.0832 43.9983C25.0119 44.0428 24.096 43.2346 24.007 42.1661L23.007 30.1661C23.0024 30.1106 23.0001 30.0552 23.0001 30H22.9498C24.25 28.7286 24.3651 26.6493 23.1719 25.2392L21.1109 22.8034L28.5477 15.3666Z" fill="#333333"/>
<path d="M16.1414 27.7673C16.0966 27.8049 16.0493 27.8379 16.0001 27.8663V42C16.0001 43.0722 16.8456 43.9537 17.917 43.9983C18.9883 44.0428 19.9041 43.2346 19.9932 42.1661L20.9258 30.9744C19.7949 31.1119 18.6191 30.6954 17.8282 29.7608L16.1414 27.7673Z" fill="#333333"/>
<path d="M33.0001 25C31.3432 25 30.0001 26.3431 30.0001 28V28.8333C30.0001 29.3856 30.4478 29.8333 31.0001 29.8333C31.5524 29.8333 32.0001 29.3856 32.0001 28.8333V28C32.0001 27.4477 32.4478 27 33.0001 27C33.5524 27 34.0001 27.4477 34.0001 28V43C34.0001 43.5523 34.4478 44 35.0001 44C35.5524 44 36.0001 43.5523 36.0001 43V28C36.0001 26.3431 34.6569 25 33.0001 25Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}