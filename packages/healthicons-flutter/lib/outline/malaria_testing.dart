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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 6C23.2761 6 23.5 6.22386 23.5 6.5V9.22761C23.7805 9.49202 24.0227 9.97264 24.1985 10.5944L25 9.79289V8.5C25 8.36739 25.0527 8.24021 25.1464 8.14645L26.6464 6.64645C26.8417 6.45118 27.1583 6.45118 27.3535 6.64645C27.5488 6.84171 27.5488 7.15829 27.3535 7.35355L26 8.70711V10C26 10.1326 25.9473 10.2598 25.8535 10.3536L24.4287 11.7784C24.4398 11.8707 24.4497 11.9644 24.4583 12.0595L29.2624 12.8571C29.4189 13.5714 29.1686 15 26.9159 15C25.6129 15 24.8752 14.3309 24.4847 13.5732C24.4733 13.7854 24.4556 13.9922 24.4322 14.1922L26.7867 15.8404C26.9769 15.9735 27.0505 16.2201 26.9642 16.4357L26.6473 17.228L27.6923 17.6635C27.9472 17.7697 28.0677 18.0624 27.9615 18.3173C27.8553 18.5722 27.5626 18.6927 27.3077 18.5865L25.8077 17.9615C25.5554 17.8564 25.4342 17.5681 25.5358 17.3143L25.8886 16.4323L24.2341 15.2742C24.1725 15.5117 24.1014 15.7305 24.0224 15.9268L24.4472 16.7764C24.4819 16.8458 24.5 16.9224 24.5 17V17.9922L24.9341 18.7519C25.0711 18.9917 24.9878 19.2971 24.7481 19.4341C24.5083 19.5711 24.2029 19.4878 24.0659 19.2481L23.5659 18.3731C23.5227 18.2975 23.5 18.212 23.5 18.125V17.118L23.3772 16.8725C23.2567 16.9557 23.1303 17 23 17C22.8887 17 22.7803 16.9677 22.6759 16.9064L22.5 17.3463V18.125C22.5 18.212 22.4773 18.2975 22.4341 18.3731L21.9341 19.2481C21.7971 19.4878 21.4917 19.5711 21.2519 19.4341C21.0122 19.2971 20.9289 18.9917 21.0659 18.7519L21.5 17.9922V17.25C21.5 17.1864 21.5121 17.1234 21.5358 17.0643L21.9842 15.9432C21.9025 15.7427 21.8292 15.5183 21.7659 15.2742L20.1114 16.4323L20.4642 17.3143C20.5658 17.5681 20.4446 17.8564 20.1923 17.9615L18.6923 18.5865C18.4374 18.6927 18.1447 18.5722 18.0385 18.3173C17.9323 18.0624 18.0528 17.7697 18.3077 17.6635L19.3527 17.228L19.0358 16.4357C18.9495 16.2201 19.0231 15.9735 19.2133 15.8404L21.5677 14.1923C21.5286 13.8576 21.5055 13.5042 21.5009 13.1382C21.1834 14.0542 20.4332 15 18.8841 15C16.6314 15 16.3811 13.5714 16.5376 12.8571L21.5448 12.0258C21.5526 11.9422 21.5615 11.8597 21.5712 11.7783L20.1464 10.3536C20.0527 10.2598 20 10.1326 20 10V8.70711L18.6464 7.35355C18.4512 7.15829 18.4512 6.84171 18.6464 6.64645C18.8417 6.45118 19.1583 6.45118 19.3535 6.64645L20.8535 8.14645C20.9473 8.24021 21 8.36739 21 8.5V9.79289L21.8015 10.5944C21.9772 9.97262 22.2195 9.492 22.5 9.2276V6.5C22.5 6.22386 22.7238 6 23 6ZM18.8841 14C18.1338 14 17.8152 13.8112 17.6801 13.6811L20.3586 13.2364C20.3425 13.263 20.3257 13.2893 20.3083 13.3151C20.0596 13.683 19.6571 14 18.8841 14ZM26.9159 14C27.6662 14 27.9848 13.8112 28.1199 13.6811L25.4414 13.2364C25.4575 13.263 25.4743 13.2893 25.4917 13.3151C25.7404 13.683 26.1429 14 26.9159 14ZM23.5 13C23.5 14.0164 23.3438 14.892 23.1243 15.4773C23.0818 15.5908 23.0397 15.6857 23 15.7642C22.9603 15.6857 22.9182 15.5908 22.8757 15.4773C22.6562 14.892 22.5 14.0164 22.5 13C22.5 11.9836 22.6562 11.108 22.8757 10.5227C22.9182 10.4092 22.9603 10.3143 23 10.2358C23.0397 10.3143 23.0818 10.4092 23.1243 10.5227C23.3438 11.108 23.5 11.9836 23.5 13Z" fill="#333333"/>
<path d="M38 25C39.1046 25 40 25.8954 40 27C40 28.1046 39.1046 29 38 29C36.8954 29 36 28.1046 36 27C36 25.8954 36.8954 25 38 25Z" fill="#333333"/>
<path d="M31 27C31 27.8284 31.6716 28.5 32.5 28.5C33.3284 28.5 34 27.8284 34 27C34 26.1716 33.3284 25.5 32.5 25.5C31.6716 25.5 31 26.1716 31 27Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 24C28.6569 24 30 25.3431 30 27C30 28.6569 28.6569 30 27 30H11C9.34315 30 8 28.6569 8 27C8 25.3431 9.34315 24 11 24H27ZM13 26H11C10.4477 26 10 26.4477 10 27C10 27.5523 10.4477 28 11 28H13V26ZM25 26H27C27.5523 26 28 26.4477 28 27C28 27.5523 27.5523 28 27 28H25V26ZM15 26H18V28H15V26ZM23 26H20V28H23V26Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 32C4 33.1046 4.89543 34 6 34L42 34C43.1046 34 44 33.1046 44 32V22C44 20.8954 43.1046 20 42 20L6 20C4.89543 20 4 20.8954 4 22V32ZM6 22L6 32L42 32V22L6 22Z" fill="#333333"/>
<path d="M7.35069 14.105C7.58818 14 7.84533 13.9738 8.09267 14.0263C8.34062 14.0789 8.57784 14.2107 8.77038 14.4161C9.14805 14.819 9.78089 14.8395 10.1838 14.4619C10.5868 14.0842 10.6073 13.4514 10.2296 13.0484C9.76677 12.5546 9.16897 12.2101 8.50787 12.0698C7.84616 11.9294 7.16106 12.0022 6.54224 12.2756C5.92437 12.5487 5.40684 13.0063 5.04737 13.5803C4.68825 14.1538 4.5 14.8217 4.5 15.5C4.5 16.1784 4.68825 16.8463 5.04737 17.4197C5.40684 17.9937 5.92437 18.4513 6.54224 18.7244C7.16105 18.9978 7.84616 19.0706 8.50787 18.9302C9.16897 18.7899 9.76677 18.4455 10.2296 17.9516C10.6073 17.5487 10.5868 16.9158 10.1838 16.5381C9.78089 16.1605 9.14805 16.181 8.77038 16.5839C8.57784 16.7893 8.34062 16.9211 8.09267 16.9738C7.84533 17.0262 7.58818 17 7.35069 16.895C7.11225 16.7897 6.89788 16.6064 6.74241 16.3582C6.58659 16.1094 6.5 15.8106 6.5 15.5C6.5 15.1894 6.58659 14.8907 6.74241 14.6418C6.89788 14.3936 7.11225 14.2103 7.35069 14.105Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 36C12.5 35.4477 12.9477 35 13.5 35H16C17.3807 35 18.5 36.1193 18.5 37.5C18.5 38.8807 17.3807 40 16 40H14.5V41C14.5 41.5523 14.0523 42 13.5 42C12.9477 42 12.5 41.5523 12.5 41V36ZM14.5 38H16C16.2761 38 16.5 37.7761 16.5 37.5C16.5 37.2239 16.2761 37 16 37H14.5V38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.5 12C32.9477 12 32.5 12.4477 32.5 13V18C32.5 18.5523 32.9477 19 33.5 19C34.0523 19 34.5 18.5523 34.5 18V17H36C37.3807 17 38.5 15.8807 38.5 14.5C38.5 13.1193 37.3807 12 36 12H33.5ZM36 15H34.5V14H36C36.2761 14 36.5 14.2239 36.5 14.5C36.5 14.7761 36.2761 15 36 15Z" fill="#333333"/>
<path d="M22 42C22.4168 42 22.7899 41.7414 22.9363 41.3511L24.4364 37.3511C24.6303 36.834 24.3683 36.2576 23.8512 36.0637C23.334 35.8697 22.7576 36.1317 22.5637 36.6489L22 38.152L21.4364 36.6489C21.2424 36.1318 20.666 35.8698 20.1489 36.0637C19.6318 36.2576 19.3698 36.834 19.5637 37.3511L21.0636 41.3511C21.21 41.7414 21.5831 42 22 42Z" fill="#333333"/>
<path d="M41.5 18V16C42.0523 16 42.5 15.5523 42.5 15C42.5 14.4479 42.0526 14.0003 41.5005 14C42.0526 13.9997 42.5 13.5521 42.5 13C42.5 12.4477 42.0523 12 41.5 12C40.7741 12 40.2239 12.3249 39.8885 12.7907C39.5898 13.2055 39.5 13.6733 39.5 14C38.9477 14 38.5 14.4477 38.5 15C38.5 15.5523 38.9477 16 39.5 16V18C39.5 18.5523 39.9477 19 40.5 19C41.0523 19 41.5 18.5523 41.5 18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}