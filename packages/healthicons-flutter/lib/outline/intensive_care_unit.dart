import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IntensiveCareUnit extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IntensiveCareUnit({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 8H9C8.44771 8 8 8.44772 8 9V39C8 39.5523 8.44772 40 9 40H39C39.5523 40 40 39.5523 40 39V9C40 8.44771 39.5523 8 39 8ZM9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.6666 11.1111V10H29.6666V11.1111C29.6666 11.6634 30.1144 12.1111 30.6666 12.1111H34.6666C35.7712 12.1111 36.6666 13.0066 36.6666 14.1111V24C36.6666 24.5523 36.2189 25 35.6666 25C35.1144 25 34.6666 24.5523 34.6666 24V14.1111H30.6666C29.0098 14.1111 27.6666 12.768 27.6666 11.1111Z" fill="#333333"/>
<path d="M27.8889 15.6667C27.8889 15.1144 28.3366 14.6667 28.8889 14.6667H31.5555C32.1078 14.6667 32.5555 15.1144 32.5555 15.6667V19.8889C32.5555 20.4412 32.1078 20.8889 31.5555 20.8889H28.8889C28.3366 20.8889 27.8889 20.4412 27.8889 19.8889V15.6667Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8889 16.6667V18.8889H30.5555V16.6667H29.8889ZM28.8889 14.6667C28.3366 14.6667 27.8889 15.1144 27.8889 15.6667V19.8889C27.8889 20.4412 28.3366 20.8889 28.8889 20.8889H31.5555C32.1078 20.8889 32.5555 20.4412 32.5555 19.8889V15.6667C32.5555 15.1144 32.1078 14.6667 31.5555 14.6667H28.8889Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.2222 15.0556V12.3333H31.2222V15.0556H29.2222Z" fill="#333333"/>
<path d="M34.9404 23.2739H20.9744C20.911 23.2739 20.8502 23.2485 20.8053 23.2033L16.0563 18.4222C14.8488 17.2065 12.893 17.2065 11.6855 18.4222C10.4752 19.6406 10.4752 21.6182 11.6855 22.8366L17.9918 29.1856C18.1563 29.3512 18.3793 29.4442 18.6117 29.4442H34.9404C36.6302 29.4442 38 28.0629 38 26.359C38 24.6551 36.6302 23.2739 34.9404 23.2739Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.9404 25.2739H20.9744C20.3757 25.2739 19.8049 25.0341 19.3863 24.6127L20.8053 23.2033C20.8502 23.2485 20.911 23.2739 20.9744 23.2739H34.9404C36.6302 23.2739 38 24.6551 38 26.359C38 28.0629 36.6302 29.4442 34.9404 29.4442H18.6117C18.3793 29.4442 18.1563 29.3512 17.9918 29.1856L11.6855 22.8366C10.4752 21.6182 10.4752 19.6406 11.6855 18.4222C12.893 17.2065 14.8488 17.2065 16.0563 18.4222L20.8053 23.2033L19.3863 24.6127L14.6374 19.8316C14.2119 19.4034 13.5299 19.4034 13.1044 19.8316C12.6689 20.2701 12.6689 20.9887 13.1044 21.4272L19.0811 27.4442H34.9404C35.5099 27.4442 36 26.9741 36 26.359C36 25.744 35.5099 25.2739 34.9404 25.2739Z" fill="#333333"/>
<path d="M12 23L14 23.9091V33H12V23Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23V33H14V23.9091L12 23Z" fill="#333333"/>
<path d="M33 29H35V33H33V29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 29V33H35V29H33Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 33.5556H10V31.5556H38V33.5556Z" fill="#333333"/>
<path d="M17 35.2778C17 36.7812 15.7812 38 14.2778 38C12.7743 38 11.5556 36.7812 11.5556 35.2778C11.5556 33.7743 12.7743 32.5556 14.2778 32.5556C15.7812 32.5556 17 33.7743 17 35.2778Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2778 36C14.6767 36 15 35.6767 15 35.2778C15 34.8789 14.6767 34.5556 14.2778 34.5556C13.8789 34.5556 13.5556 34.8789 13.5556 35.2778C13.5556 35.6767 13.8789 36 14.2778 36ZM14.2778 38C15.7812 38 17 36.7812 17 35.2778C17 33.7743 15.7812 32.5556 14.2778 32.5556C12.7743 32.5556 11.5556 33.7743 11.5556 35.2778C11.5556 36.7812 12.7743 38 14.2778 38Z" fill="#333333"/>
<path d="M36.4444 35.2778C36.4444 36.7812 35.2257 38 33.7222 38C32.2188 38 31 36.7812 31 35.2778C31 33.7743 32.2188 32.5556 33.7222 32.5556C35.2257 32.5556 36.4444 33.7743 36.4444 35.2778Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.7222 36C34.1211 36 34.4444 35.6767 34.4444 35.2778C34.4444 34.8789 34.1211 34.5556 33.7222 34.5556C33.3233 34.5556 33 34.8789 33 35.2778C33 35.6767 33.3233 36 33.7222 36ZM33.7222 38C35.2257 38 36.4444 36.7812 36.4444 35.2778C36.4444 33.7743 35.2257 32.5556 33.7222 32.5556C32.2188 32.5556 31 33.7743 31 35.2778C31 36.7812 32.2188 38 33.7222 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1032 16.9232C16.3358 15.6917 18.3335 15.6924 19.5653 16.9247L20.9654 18.3256C22.1973 19.5581 22.1966 21.5557 20.9639 22.7873L19.8205 23.9297L18.407 22.5148L19.5503 21.3725C20.0015 20.9217 20.0018 20.1906 19.5509 19.7395L18.1507 18.3386C17.6997 17.8874 16.9681 17.8871 16.5168 18.338L15.3735 19.4804L13.9599 18.0655L15.1032 16.9232Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}