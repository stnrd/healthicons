import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MalariaTesting extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MalariaTesting({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 6.5C24 6.22386 23.7761 6 23.5 6C23.2238 6 23 6.22386 23 6.5V9.22761C22.7195 9.49201 22.4772 9.97263 22.3015 10.5944L21.5 9.79289V8.5C21.5 8.36739 21.4473 8.24021 21.3535 8.14645L19.8535 6.64645C19.6583 6.45118 19.3417 6.45118 19.1464 6.64645C18.9512 6.84171 18.9512 7.15829 19.1464 7.35355L20.5 8.70711V10C20.5 10.1326 20.5527 10.2598 20.6464 10.3536L22.0712 11.7784C22.0615 11.8597 22.0526 11.9422 22.0448 12.0258L17.0376 12.8571C16.8811 13.5714 17.1314 15 19.3841 15C20.9332 15 21.6834 14.0542 22.0009 13.1382C22.005 13.4647 22.0239 13.7812 22.0556 14.0833L19.7 15.85C19.5191 15.9856 19.4518 16.2258 19.5358 16.4357L19.8527 17.228L18.8077 17.6635C18.5528 17.7697 18.4323 18.0624 18.5385 18.3173C18.6447 18.5722 18.9374 18.6927 19.1923 18.5865L20.6923 17.9615C20.9446 17.8564 21.0658 17.5681 20.9642 17.3143L20.6066 16.4201L22.2449 15.1913C22.2877 15.3655 22.3355 15.5301 22.3878 15.6839L22.0159 17.1251C22.0053 17.1659 22 17.2079 22 17.25V17.9922L21.5659 18.7519C21.4289 18.9917 21.5122 19.2971 21.7519 19.4341C21.9917 19.5711 22.2971 19.4878 22.4341 19.2481L22.9341 18.3731C22.9773 18.2975 23 18.212 23 18.125V17.3135L23.1152 16.8672C23.238 16.9538 23.367 17 23.5 17C23.6492 17 23.7933 16.9419 23.9293 16.8338L24 17.0725V18.125C24 18.212 24.0227 18.2975 24.0659 18.3731L24.5659 19.2481C24.7029 19.4878 25.0083 19.5711 25.2481 19.4341C25.4878 19.2971 25.5711 18.9917 25.4341 18.7519L25 17.9922V17C25 16.9519 24.9931 16.9041 24.9794 16.858L24.6225 15.6534C24.6625 15.5332 24.6997 15.4066 24.7341 15.2742L26.3886 16.4323L26.0358 17.3143C25.9342 17.5681 26.0554 17.8564 26.3077 17.9615L27.8077 18.5865C28.0626 18.6927 28.3553 18.5722 28.4615 18.3173C28.5677 18.0624 28.4472 17.7697 28.1923 17.6635L27.1473 17.228L27.4642 16.4357C27.5505 16.2201 27.4769 15.9735 27.2867 15.8404L24.9322 14.1922C24.9556 13.9922 24.9733 13.7854 24.9847 13.5732C25.3752 14.3309 26.1129 15 27.4159 15C29.6686 15 29.9189 13.5714 29.7624 12.8571L24.9583 12.0595C24.9497 11.9644 24.9398 11.8707 24.9287 11.7784L26.3535 10.3536C26.4473 10.2598 26.5 10.1326 26.5 10V8.70711L27.8535 7.35355C28.0488 7.15829 28.0488 6.84171 27.8535 6.64645C27.6583 6.45118 27.3417 6.45118 27.1464 6.64645L25.6464 8.14645C25.5527 8.24021 25.5 8.36739 25.5 8.5V9.79289L24.6985 10.5944C24.5227 9.97263 24.2805 9.49201 24 9.22761V6.5ZM19.3841 14C18.6338 14 18.3152 13.8112 18.1801 13.6811L20.8586 13.2364C20.8425 13.263 20.8257 13.2893 20.8083 13.3151C20.5596 13.683 20.1571 14 19.3841 14ZM28.6199 13.6811C28.4848 13.8112 28.1662 14 27.4159 14C26.6429 14 26.2404 13.683 25.9917 13.3151C25.9743 13.2893 25.9575 13.263 25.9414 13.2364L28.6199 13.6811Z" fill="#333333"/>
<path d="M12 26H10C9.44772 26 9 26.4477 9 27C9 27.5523 9.44772 28 10 28H12V26Z" fill="#333333"/>
<path d="M14 28H17V26H14V28Z" fill="#333333"/>
<path d="M19 28H22V26H19V28Z" fill="#333333"/>
<path d="M26 26C26.5523 26 27 26.4477 27 27C27 27.5523 26.5523 28 26 28L24 28V26H26Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 33C4.89543 33 4 32.1046 4 31V23C4 21.8954 4.89543 21 6 21L42 21C43.1046 21 44 21.8954 44 23V31C44 32.1046 43.1046 33 42 33L6 33ZM38 25C39.1046 25 40 25.8954 40 27C40 28.1046 39.1046 29 38 29C36.8954 29 36 28.1046 36 27C36 25.8954 36.8954 25 38 25ZM31 27C31 27.8284 31.6716 28.5 32.5 28.5C33.3284 28.5 34 27.8284 34 27C34 26.1716 33.3284 25.5 32.5 25.5C31.6716 25.5 31 26.1716 31 27ZM7 27C7 28.6569 8.34315 30 10 30H26C27.6569 30 29 28.6569 29 27C29 25.3431 27.6569 24 26 24H10C8.34315 24 7 25.3431 7 27Z" fill="#333333"/>
<path d="M7.85069 14.105C8.08818 14 8.34533 13.9738 8.59267 14.0263C8.84062 14.0789 9.07784 14.2107 9.27038 14.4161C9.64805 14.819 10.2809 14.8395 10.6838 14.4619C11.0868 14.0842 11.1073 13.4514 10.7296 13.0484C10.2668 12.5546 9.66897 12.2101 9.00787 12.0698C8.34616 11.9294 7.66106 12.0022 7.04224 12.2756C6.42437 12.5487 5.90684 13.0063 5.54737 13.5803C5.18825 14.1538 5 14.8217 5 15.5C5 16.1784 5.18825 16.8463 5.54737 17.4197C5.90684 17.9937 6.42437 18.4513 7.04224 18.7244C7.66105 18.9978 8.34616 19.0706 9.00787 18.9302C9.66897 18.7899 10.2668 18.4455 10.7296 17.9516C11.1073 17.5487 11.0868 16.9158 10.6838 16.5381C10.2809 16.1605 9.64805 16.181 9.27038 16.5839C9.07784 16.7893 8.84062 16.9211 8.59267 16.9738C8.34534 17.0262 8.08818 17 7.85069 16.895C7.61225 16.7897 7.39788 16.6064 7.24241 16.3582C7.08659 16.1094 7 15.8106 7 15.5C7 15.1894 7.08659 14.8907 7.24241 14.6418C7.39788 14.3936 7.61225 14.2103 7.85069 14.105Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 36C13 35.4477 13.4477 35 14 35H16.5C17.8807 35 19 36.1193 19 37.5C19 38.8807 17.8807 40 16.5 40H15V41C15 41.5523 14.5523 42 14 42C13.4477 42 13 41.5523 13 41V36ZM15 38H16.5C16.7761 38 17 37.7761 17 37.5C17 37.2239 16.7761 37 16.5 37H15V38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 12C33.4477 12 33 12.4477 33 13V18C33 18.5523 33.4477 19 34 19C34.5523 19 35 18.5523 35 18V17H36.5C37.8807 17 39 15.8807 39 14.5C39 13.1193 37.8807 12 36.5 12H34ZM36.5 15H35V14H36.5C36.7761 14 37 14.2239 37 14.5C37 14.7761 36.7761 15 36.5 15Z" fill="#333333"/>
<path d="M22.5 42C22.9168 42 23.2899 41.7414 23.4363 41.3511L24.9364 37.3511C25.1303 36.834 24.8683 36.2576 24.3512 36.0637C23.834 35.8697 23.2576 36.1317 23.0637 36.6489L22.5 38.152L21.9364 36.6489C21.7424 36.1318 21.166 35.8698 20.6489 36.0637C20.1318 36.2576 19.8698 36.834 20.0637 37.3511L21.5636 41.3511C21.71 41.7414 22.0831 42 22.5 42Z" fill="#333333"/>
<path d="M42 18V16C42.5523 16 43 15.5523 43 15C43 14.4479 42.5526 14.0003 42.0005 14C42.5526 13.9997 43 13.5521 43 13C43 12.4477 42.5523 12 42 12C41.2741 12 40.7239 12.3249 40.3885 12.7907C40.0898 13.2055 40 13.6733 40 14C39.4477 14 39 14.4477 39 15C39 15.5523 39.4477 16 40 16V18C40 18.5523 40.4477 19 41 19C41.5523 19 42 18.5523 42 18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}