import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Masked extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Masked({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.957 25.1826C39.9855 24.7922 40 24.3978 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 24.4345 8.01732 24.865 8.05131 25.2908C8.94937 25.7545 10.0268 26.0583 10.9377 26.2475C11.4175 26.3471 11.8347 26.4117 12.1304 26.4512C12.2383 26.4656 12.3297 26.4766 12.4015 26.4847C21.3659 24.4618 26.5764 24.5531 35.5174 26.4716C35.5655 26.4657 35.6188 26.4589 35.677 26.4512C35.9727 26.4117 36.3899 26.3471 36.8697 26.2475C37.8453 26.0448 39.0119 25.7108 39.9446 25.1896L39.957 25.1826ZM26.6132 22.4421C26.4832 22.0844 26.5221 21.6474 26.6298 21.2489C26.7421 20.8333 26.9489 20.3855 27.2402 19.9696C27.8208 19.1405 28.7838 18.3781 30.0845 18.3235C31.4313 18.2669 32.4377 19.1217 33.0577 20.0289C33.3723 20.4892 33.606 20.9871 33.7527 21.4451C33.8954 21.8908 33.971 22.347 33.9211 22.7116C33.898 22.8807 33.7901 23.0264 33.6351 23.0979C33.4801 23.1694 33.2992 23.1568 33.1556 23.0645C32.7563 22.8081 32.3366 22.4572 31.9488 22.1331C31.7722 21.9855 31.6019 21.8431 31.4436 21.7181C30.8813 21.274 30.4438 21.021 30.081 21.0032C29.7364 20.9863 29.3381 21.1839 28.8365 21.5593C28.6571 21.6935 28.483 21.8356 28.3026 21.9828C28.2384 22.0351 28.1733 22.0882 28.107 22.1418C27.8632 22.3386 27.6036 22.5409 27.342 22.6992C27.2139 22.7766 27.058 22.7927 26.9169 22.7429C26.7758 22.6931 26.6644 22.5828 26.6132 22.4421ZM20.8379 21.2489C20.9456 21.6474 20.9845 22.0844 20.8545 22.4421C20.8033 22.5828 20.6919 22.6931 20.5508 22.7429C20.4097 22.7926 20.2537 22.7766 20.1257 22.6992C19.8641 22.5409 19.6045 22.3386 19.3607 22.1418C19.2944 22.0882 19.2294 22.0352 19.1653 21.9828C18.9849 21.8357 18.8106 21.6935 18.6312 21.5593C18.1296 21.1839 17.7312 20.9863 17.3867 21.0032C17.0239 21.021 16.5864 21.274 16.0241 21.7181C15.8657 21.8432 15.6957 21.9852 15.5191 22.1329C15.1314 22.457 14.7114 22.8081 14.3121 23.0645C14.1684 23.1568 13.9876 23.1693 13.8326 23.0979C13.6775 23.0264 13.5697 22.8807 13.5465 22.7116C13.4967 22.347 13.5723 21.8908 13.715 21.4451C13.8617 20.9871 14.0954 20.4891 14.41 20.0288C15.03 19.1217 16.0364 18.2669 17.3832 18.3235C18.6839 18.3781 19.6469 19.1404 20.2275 19.9696C20.5187 20.3855 20.7256 20.8333 20.8379 21.2489Z" fill="#333333"/>
<path d="M39.607 27.5403C38.7859 27.8524 37.9598 28.0637 37.2764 28.2057C37.056 28.2514 36.8474 28.2906 36.6551 28.3239C37.2017 30.0169 37.3712 31.4375 37.2604 32.9562C38.3558 31.3375 39.1626 29.5076 39.607 27.5403Z" fill="#333333"/>
<path d="M10.993 33.3197C9.78331 31.6344 8.89305 29.7043 8.41079 27.6181C9.16155 27.888 9.90592 28.0758 10.531 28.2057C10.8683 28.2757 11.1779 28.3303 11.444 28.3722C10.9568 30.1853 10.8121 31.6979 10.993 33.3197Z" fill="#333333"/>
<path d="M18 30V32H30V30H18Z" fill="#333333"/>
<path d="M18 34V36H30V34H18Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM41.1102 18.3948C38.7541 11.1982 31.9841 6 24 6C16.1066 6 9.39982 11.0808 6.97179 18.1505C6.89871 18.196 6.83034 18.2517 6.76879 18.3177C4.94716 20.2694 4.14079 22.0244 4.33542 23.6137C4.49242 24.8958 5.26729 25.8219 6.1692 26.4782C6.76246 30.7865 8.88039 34.6083 11.961 37.3816L12.0001 37.5C12.3703 37.7962 12.7454 38.0777 13.1248 38.3445C16.146 40.6386 19.914 42 24 42C28.5794 42 32.7594 40.2899 35.9362 37.4735C36.1254 37.3197 36.3134 37.1619 36.5001 37L36.5169 36.9356C39.3756 34.1687 41.32 30.4628 41.8525 26.315C42.6604 25.671 43.3275 24.7929 43.4719 23.6137C43.664 22.0454 42.8813 20.3157 41.1102 18.3948Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}