import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Doctor extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Doctor({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 16C34 21.5228 29.5228 26 24 26C18.4772 26 14 21.5228 14 16C14 10.4772 18.4772 6 24 6C29.5228 6 34 10.4772 34 16ZM32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16C16 11.5817 19.5817 8 24 8C28.4183 8 32 11.5817 32 16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9141 28.8551C17.9178 28.8625 17.9215 28.8698 17.9252 28.8771C17.9507 28.9281 17.9756 28.9774 18 29.0237H22.0639C22.9708 29.0235 23.4235 29.0236 23.8769 29.0237H23.9017C24.3455 29.0238 24.798 29.0239 25.6851 29.0237H29.7493C29.9775 28.5902 30.4972 27.8981 31 28.0126C32.1296 28.2699 33.2676 28.6285 34.3611 29.0694L34.3944 29.0528L34.4053 29.0748L34.4127 29.0903C38.5281 30.7615 42 33.5962 42 36.5699V42H6V36.5699C6 32.7946 11.5958 29.2434 17 28.0126C17.4413 27.9121 17.7025 28.4331 17.9141 28.8551ZM32.7043 30.5826C32.2749 30.4325 31.8398 30.2965 31.4029 30.176L30.9566 31.0237H25.6851C24.7785 31.0239 24.3313 31.0238 23.8896 31.0237C23.4375 31.0236 22.9912 31.0235 22.0644 31.0237H16.7927L16.3788 30.2375C16.2584 30.2722 16.1382 30.3081 16.0182 30.345C16.0116 30.4109 16.0064 30.4853 16.0033 30.5687C15.9903 30.9137 16.0161 31.3228 16.0729 31.7399C16.1296 32.1557 16.2139 32.5546 16.3077 32.8762C16.3226 32.9273 16.3375 32.9754 16.3521 33.0204C17.8431 33.1948 19 34.4623 19 36C19 37.6569 17.6569 39 16 39C14.3431 39 13 37.6569 13 36C13 34.9331 13.557 33.9962 14.396 33.4644L14.3877 33.4362C14.2628 33.0079 14.1596 32.5109 14.0913 32.0101C14.0498 31.7062 14.02 31.3916 14.0071 31.0819C12.7705 31.6098 11.6185 32.2478 10.6523 32.9527C8.72972 34.3554 8 35.6669 8 36.5699V40H40V36.5699C40 35.6669 39.2703 34.3554 37.3477 32.9527C36.5634 32.3805 35.6567 31.8524 34.6818 31.3915C34.666 31.5994 34.6435 31.8071 34.6158 32.0101C34.5697 32.3485 34.5076 32.6851 34.4336 33H35C35.3788 33 35.725 33.214 35.8944 33.5528L36.8944 35.5528C36.9639 35.6916 37 35.8448 37 36V38C37 38.5523 36.5523 39 36 39H34V37H35V36.2361L34.382 35H31.618L31 36.2361V37H32V39H30C29.4477 39 29 38.5523 29 38V36C29 35.8448 29.0361 35.6916 29.1056 35.5528L30.1056 33.5528C30.275 33.214 30.6212 33 31 33H32.3616C32.3741 32.9609 32.3867 32.9197 32.3994 32.8762C32.4932 32.5546 32.5775 32.1557 32.6342 31.7399C32.6903 31.3284 32.7161 30.9246 32.7043 30.5826ZM17 36C17 36.5742 16.5384 37.0147 16 37.0147C15.4616 37.0147 15 36.5742 15 36C15 35.4258 15.4616 34.9853 16 34.9853C16.5384 34.9853 17 35.4258 17 36Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}