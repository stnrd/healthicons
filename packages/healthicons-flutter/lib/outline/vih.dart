import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Vih extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Vih({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 20.5C17.0523 20.5 17.5 20.9477 17.5 21.5V23H18.5V21.5C18.5 20.9477 18.9477 20.5 19.5 20.5C20.0523 20.5 20.5 20.9477 20.5 21.5V26.5C20.5 27.0523 20.0523 27.5 19.5 27.5C18.9477 27.5 18.5 27.0523 18.5 26.5V25H17.5V26.5C17.5 27.0523 17.0523 27.5 16.5 27.5C15.9477 27.5 15.5 27.0523 15.5 26.5V21.5C15.5 20.9477 15.9477 20.5 16.5 20.5Z" fill="#333333"/>
<path d="M22.5 20.5C21.9477 20.5 21.5 20.9477 21.5 21.5C21.5 22.0523 21.9477 22.5 22.5 22.5H23V25.5H22.5C21.9477 25.5 21.5 25.9477 21.5 26.5C21.5 27.0523 21.9477 27.5 22.5 27.5H25.5C26.0523 27.5 26.5 27.0523 26.5 26.5C26.5 25.9477 26.0523 25.5 25.5 25.5H25V22.5H25.5C26.0523 22.5 26.5 22.0523 26.5 21.5C26.5 20.9477 26.0523 20.5 25.5 20.5H22.5Z" fill="#333333"/>
<path d="M30.5 27.5C30.9089 27.5 31.2766 27.251 31.4285 26.8714L33.4285 21.8714C33.6336 21.3586 33.3842 20.7766 32.8714 20.5715C32.3586 20.3664 31.7766 20.6158 31.5715 21.1286L30.5 23.8074L29.4285 21.1286C29.2234 20.6158 28.6414 20.3664 28.1286 20.5715C27.6158 20.7766 27.3664 21.3586 27.5715 21.8714L29.5715 26.8714C29.7234 27.251 30.0911 27.5 30.5 27.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 4C21.4477 4 21 4.44772 21 5C21 5.55228 21.4477 6 22 6H23V9.0328C19.6102 9.25592 16.528 10.6051 14.1239 12.7098L11.9792 10.565L12.6863 9.85793C13.0768 9.4674 13.0768 8.83424 12.6863 8.44371C12.2958 8.05319 11.6626 8.05319 11.2721 8.44371L8.44365 11.2721C8.05313 11.6627 8.05313 12.2958 8.44365 12.6864C8.83417 13.0769 9.46734 13.0769 9.85786 12.6864L10.565 11.9792L12.7097 14.124C10.605 16.5281 9.25585 19.6104 9.03279 23.0002H6V22.0002C6 21.448 5.55228 21.0002 5 21.0002C4.44772 21.0002 4 21.448 4 22.0002V26.0002C4 26.5525 4.44772 27.0002 5 27.0002C5.55228 27.0002 6 26.5525 6 26.0002V25.0002H9.03282C9.25598 28.3899 10.6051 31.4719 12.7097 33.8759L10.5649 36.0207L9.85781 35.3136C9.46728 34.9231 8.83412 34.9231 8.44359 35.3136C8.05307 35.7041 8.05307 36.3373 8.44359 36.7278L11.272 39.5562C11.6625 39.9468 12.2957 39.9468 12.6862 39.5562C13.0768 39.1657 13.0768 38.5325 12.6862 38.142L11.9791 37.4349L14.1239 35.2902C16.528 37.3949 19.6102 38.7441 23 38.9672V42H22C21.4477 42 21 42.4477 21 43C21 43.5523 21.4477 44 22 44H26C26.5523 44 27 43.5523 27 43C27 42.4477 26.5523 42 26 42H25V38.9672C28.3897 38.7441 31.4719 37.3949 33.876 35.2903L36.0208 37.4351L35.3137 38.1422C34.9232 38.5327 34.9232 39.1659 35.3137 39.5564C35.7042 39.9469 36.3374 39.9469 36.7279 39.5564L39.5563 36.728C39.9469 36.3375 39.9469 35.7043 39.5563 35.3138C39.1658 34.9232 38.5327 34.9232 38.1421 35.3138L37.435 36.0209L35.2902 33.8761C37.3949 31.472 38.744 28.3899 38.9672 25.0002H42V26.0002C42 26.5525 42.4477 27.0002 43 27.0002C43.5523 27.0002 44 26.5525 44 26.0002V22.0002C44 21.448 43.5523 21.0002 43 21.0002C42.4477 21.0002 42 21.448 42 22.0002V23.0002H38.9672C38.7441 19.6103 37.3949 16.528 35.2902 14.1239L37.435 11.9791L38.1421 12.6862C38.5326 13.0767 39.1658 13.0767 39.5563 12.6862C39.9468 12.2956 39.9468 11.6625 39.5563 11.272L36.7279 8.44353C36.3373 8.05301 35.7042 8.05301 35.3137 8.44353C34.9231 8.83406 34.9231 9.46722 35.3137 9.85775L36.0208 10.5649L33.8759 12.7097C31.4719 10.605 28.3897 9.25592 25 9.0328V6H26C26.5523 6 27 5.55228 27 5C27 4.44772 26.5523 4 26 4H22ZM15.5418 14.1276C17.5785 12.381 20.1619 11.2538 23 11.0379V12C23 12.5523 23.4477 13 24 13C24.5523 13 25 12.5523 25 12V11.0379C27.8381 11.2538 30.4214 12.381 32.4581 14.1275L31.7781 14.8075C31.3876 15.198 31.3876 15.8312 31.7781 16.2217C32.1686 16.6122 32.8018 16.6122 33.1923 16.2217L33.8723 15.5417C35.619 17.5785 36.7463 20.162 36.9621 23.0002H36C35.4477 23.0002 35 23.448 35 24.0002C35 24.5525 35.4477 25.0002 36 25.0002H36.9621C36.7461 27.8383 35.6189 30.4216 33.8724 32.4582L33.1924 31.7782C32.8019 31.3877 32.1687 31.3877 31.7782 31.7782C31.3876 32.1688 31.3876 32.8019 31.7782 33.1925L32.4582 33.8725C30.4215 35.619 27.8381 36.7462 25 36.9621V36C25 35.4477 24.5523 35 24 35C23.4477 35 23 35.4477 23 36V36.9621C20.1618 36.7462 17.5784 35.619 15.5417 33.8723L16.2218 33.1923C16.6123 32.8017 16.6123 32.1686 16.2218 31.7781C15.8312 31.3875 15.1981 31.3875 14.8076 31.7781L14.1275 32.4581C12.381 30.4215 11.2539 27.8382 11.0379 25.0002H12C12.5523 25.0002 13 24.5525 13 24.0002C13 23.448 12.5523 23.0002 12 23.0002H11.0379C11.2537 20.162 12.3809 17.5786 14.1275 15.5418L14.8076 16.2219C15.1981 16.6124 15.8313 16.6124 16.2218 16.2219C16.6123 15.8314 16.6123 15.1982 16.2218 14.8077L15.5418 14.1276Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}