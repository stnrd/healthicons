import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pregnant3638W extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Pregnant3638W({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.3135 31.6072C40.0801 32.1077 39.4851 32.3243 38.9846 32.0909C38.484 31.8575 38.2675 31.2625 38.5009 30.762C39.6348 28.3303 40.139 25.6524 39.9671 22.9748C39.7952 20.2973 38.9527 17.7059 37.5171 15.4392C36.0815 13.1724 34.0989 11.3031 31.7517 10.0032C29.4046 8.70328 26.7682 8.0145 24.0851 8.00022C21.4021 7.98595 18.7585 8.64664 16.3976 9.92151C16.1536 10.0533 15.9135 10.1911 15.6774 10.3349C15.7831 10.4722 15.8903 10.6098 15.9989 10.7491L15.9998 10.7503C16.0148 10.7696 16.0299 10.7889 16.045 10.8083C16.1522 10.9459 16.2606 11.0852 16.3699 11.2275C16.7927 11.7777 17.2256 12.3679 17.5388 12.9634C17.8501 13.5551 18.0988 14.254 18.0281 15.0043C17.9535 15.7964 17.5409 16.4779 16.8576 17.04L16.1104 17.6548C15.8484 17.8703 15.7732 18.0621 15.7547 18.1842C15.7354 18.3118 15.764 18.4539 15.8607 18.5957C16.0509 18.8745 16.5451 19.171 17.3008 18.9696C17.8017 18.8361 18.4636 18.6885 19.0662 19.0152C19.3643 19.1768 19.5594 19.4064 19.6925 19.5945C19.8108 19.7618 19.9231 19.961 20.0212 20.135L20.0629 20.209L20.1854 20.4806C20.4008 19.4123 21.1926 18.4996 22.3136 18.1837C23.9083 17.7343 25.5654 18.6627 26.0149 20.2574L26.4206 21.6971L27.0688 21.6278C28.4247 21.4828 29.7079 22.2706 30.1921 23.5454C30.6843 24.841 30.5115 26.1653 30.1587 27.1841C29.7893 28.2507 29.1351 29.2628 28.2684 30.1152C26.4898 31.8644 23.7749 32.9904 20.4238 32.6858C19.2898 32.5827 18.3119 31.8465 17.8993 30.7853L16.8673 28.1312L15.989 28.3797C14.3947 28.8306 12.7367 27.9038 12.2857 26.3095C11.8347 24.7152 12.7615 23.0572 14.3558 22.6062L17.8584 21.6154C18.057 21.5593 18.2569 21.5245 18.4556 21.5097L18.2769 21.1136C18.2049 20.9862 18.1548 20.8986 18.1145 20.8332C18.0451 20.8456 17.9486 20.8668 17.8157 20.9022C16.322 21.3002 14.9233 20.7704 14.2086 19.7228C13.8528 19.2014 13.6759 18.5554 13.7772 17.8854C13.8792 17.2101 14.2504 16.5951 14.8397 16.1103L15.587 15.4955C15.9493 15.1974 16.0223 14.9726 16.037 14.8168C16.0556 14.6194 15.9973 14.3289 15.7688 13.8944C15.5422 13.4638 15.2027 12.991 14.784 12.446C14.6774 12.3073 14.5649 12.1629 14.4491 12.0144C14.3144 11.8415 14.1751 11.6629 14.036 11.4813C12.6886 12.5537 11.5183 13.8405 10.5747 15.2958C9.11512 17.5472 8.24508 20.1294 8.04469 22.805C7.8443 25.4806 8.31999 28.1637 9.42799 30.6073C9.65606 31.1103 9.43319 31.7029 8.93019 31.931C8.4272 32.1591 7.83456 31.9362 7.60649 31.4332C6.35998 28.6841 5.82484 25.6657 6.05028 22.6556C6.27572 19.6456 7.2545 16.7406 8.89659 14.2078C10.5387 11.6751 12.7913 9.59594 15.4473 8.16171C18.1033 6.72747 21.0773 5.9842 24.0958 6.00025C27.1142 6.01631 30.0801 6.79119 32.7207 8.2536C35.3613 9.71601 37.5917 11.819 39.2067 14.3691C40.8218 16.9191 41.7696 19.8344 41.963 22.8467C42.1564 25.859 41.5892 28.8715 40.3135 31.6072ZM22.8561 20.1087C23.3877 19.9589 23.9401 20.2684 24.0899 20.8L24.7247 23.0524C24.857 23.5218 25.3086 23.8273 25.7935 23.7755L27.2814 23.6164C27.7334 23.5681 28.1611 23.8307 28.3225 24.2556C28.596 24.9757 28.5241 25.7923 28.2688 26.5296C28.0086 27.281 27.5318 28.0345 26.8661 28.6893C25.5198 30.0132 23.3896 30.9471 20.6048 30.694C20.2268 30.6596 19.9009 30.4142 19.7633 30.0605L18.4019 26.5591C18.2151 26.0787 17.6937 25.819 17.1977 25.9593L15.4446 26.4552C14.9132 26.6055 14.3605 26.2966 14.2102 25.7651C14.0598 25.2337 14.3688 24.681 14.9002 24.5307L18.4028 23.5399C18.8988 23.3996 19.4202 23.6593 19.607 24.1397L21.1363 28.0727C21.298 28.4886 21.7158 28.747 22.1601 28.706C23.278 28.6029 24.1716 28.2395 24.8487 27.7708C25.213 27.5187 25.368 27.0569 25.2295 26.636C25.0911 26.2152 24.6922 25.9356 24.2493 25.949C23.7948 25.9628 23.3831 25.6649 23.2579 25.2206L22.1649 21.3425C22.0151 20.8109 22.3245 20.2585 22.8561 20.1087Z" fill="#333333"/>
<path d="M10.1589 36.8C10.5117 36.8 10.7 37.0536 10.7 37.25C10.7 37.4464 10.5117 37.7 10.1589 37.7H9.26481C8.82298 37.7 8.46481 38.0582 8.46481 38.5C8.46481 38.9418 8.82298 39.3 9.26481 39.3H10.1589C10.5117 39.3 10.7 39.5536 10.7 39.75C10.7 39.9464 10.5117 40.2 10.1589 40.2H9.26481C8.9956 40.2 8.80813 40.0415 8.74803 39.883C8.59137 39.4699 8.12947 39.262 7.71635 39.4186C7.30322 39.5753 7.09532 40.0372 7.25198 40.4503C7.5601 41.2628 8.36616 41.8 9.26481 41.8H10.1589C11.2874 41.8 12.3 40.9343 12.3 39.75C12.3 39.2684 12.1325 38.8394 11.8579 38.5C12.1325 38.1606 12.3 37.7316 12.3 37.25C12.3 36.0657 11.2874 35.2 10.1589 35.2H9.26481C8.36616 35.2 7.56009 35.7372 7.25198 36.5497C7.09532 36.9628 7.30322 37.4247 7.71635 37.5814C8.12947 37.738 8.59137 37.5301 8.74803 37.117C8.80813 36.9585 8.9956 36.8 9.26481 36.8H10.1589Z" fill="#333333"/>
<path d="M26.2 37.25C26.2 37.0536 26.0117 36.8 25.6589 36.8H24.7648C24.4956 36.8 24.3081 36.9585 24.248 37.117C24.0914 37.5301 23.6295 37.738 23.2163 37.5814C22.8032 37.4247 22.5953 36.9628 22.752 36.5497C23.0601 35.7372 23.8662 35.2 24.7648 35.2H25.6589C26.7874 35.2 27.8 36.0657 27.8 37.25C27.8 37.7316 27.6325 38.1606 27.3579 38.5C27.6325 38.8394 27.8 39.2684 27.8 39.75C27.8 40.9343 26.7874 41.8 25.6589 41.8H24.7648C23.8662 41.8 23.0601 41.2628 22.752 40.4503C22.5953 40.0372 22.8032 39.5753 23.2163 39.4186C23.6295 39.262 24.0914 39.4699 24.248 39.883C24.3081 40.0415 24.4956 40.2 24.7648 40.2H25.6589C26.0117 40.2 26.2 39.9464 26.2 39.75C26.2 39.5536 26.0117 39.3 25.6589 39.3H24.7648C24.323 39.3 23.9648 38.9418 23.9648 38.5C23.9648 38.0582 24.323 37.7 24.7648 37.7H25.6589C26.0117 37.7 26.2 37.4464 26.2 37.25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6805 36.8C16.9323 36.8 17.1149 36.9508 17.1754 37.113C17.3298 37.5269 17.7906 37.7373 18.2046 37.5829C18.6185 37.4284 18.8289 36.9676 18.6745 36.5537C18.3727 35.7448 17.5777 35.2 16.6805 35.2H15.8195C14.6903 35.2 13.7 36.0776 13.7 37.25V39.75C13.7 40.9224 14.6903 41.8 15.8195 41.8H16.6805C17.8097 41.8 18.8 40.9224 18.8 39.75C18.8 38.5776 17.8097 37.7 16.6805 37.7H15.8195C15.6418 37.7 15.4675 37.7217 15.3 37.7629V37.25C15.3 37.0417 15.4913 36.8 15.8195 36.8H16.6805ZM15.3 39.75C15.3 39.5417 15.4913 39.3 15.8195 39.3H16.6805C17.0088 39.3 17.2 39.5417 17.2 39.75C17.2 39.9583 17.0088 40.2 16.6805 40.2H15.8195C15.4913 40.2 15.3 39.9583 15.3 39.75Z" fill="#333333"/>
<path d="M35.2109 36.1315C35.1383 35.6957 35.4327 35.2835 35.8685 35.2109C36.3043 35.1383 36.7165 35.4327 36.7891 35.8685L37.2532 38.6528L37.8054 37.6864C37.9478 37.4372 38.2129 37.2833 38.5 37.2833C38.7871 37.2833 39.0522 37.4372 39.1946 37.6864L39.7468 38.6528L40.2109 35.8685C40.2835 35.4327 40.6957 35.1383 41.1315 35.2109C41.5673 35.2835 41.8618 35.6957 41.7891 36.1315L40.9558 41.1315C40.9002 41.4653 40.6406 41.7279 40.3075 41.7875C39.9745 41.8471 39.6399 41.6907 39.4721 41.3969L38.5 39.6958L37.5279 41.3969C37.3601 41.6907 37.0255 41.8471 36.6925 41.7875C36.3594 41.7279 36.0998 41.4653 36.0442 41.1315L35.2109 36.1315Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.8619 38.5C34.1346 38.1591 34.3 37.7292 34.3 37.25C34.3 36.0776 33.3097 35.2 32.1805 35.2H31.3195C30.1903 35.2 29.2 36.0776 29.2 37.25C29.2 37.7292 29.3654 38.1591 29.6381 38.5C29.3654 38.8409 29.2 39.2708 29.2 39.75C29.2 40.9224 30.1903 41.8 31.3195 41.8H32.1805C33.3097 41.8 34.3 40.9224 34.3 39.75C34.3 39.2708 34.1346 38.8409 33.8619 38.5ZM31.3195 36.8C30.9913 36.8 30.8 37.0417 30.8 37.25C30.8 37.4583 30.9913 37.7 31.3195 37.7H32.1805C32.5088 37.7 32.7 37.4583 32.7 37.25C32.7 37.0417 32.5088 36.8 32.1805 36.8H31.3195ZM32.7 39.75C32.7 39.5417 32.5088 39.3 32.1805 39.3H31.3195C30.9913 39.3 30.8 39.5417 30.8 39.75C30.8 39.9583 30.9913 40.2 31.3195 40.2H32.1805C32.5088 40.2 32.7 39.9583 32.7 39.75Z" fill="#333333"/>
<path d="M20.5 38.2C20.0582 38.2 19.7 38.5582 19.7 39C19.7 39.4418 20.0582 39.8 20.5 39.8H21.5C21.9418 39.8 22.3 39.4418 22.3 39C22.3 38.5582 21.9418 38.2 21.5 38.2H20.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.787 21.4175C31.6547 22.397 33.9628 21.6769 34.9423 19.8092C35.9218 17.9414 35.2017 15.6333 33.334 14.6539C31.4662 13.6744 29.1581 14.3945 28.1787 16.2622C27.1992 18.1299 27.9193 20.438 29.787 21.4175ZM30.7159 19.6463C31.6054 20.1127 32.7046 19.7698 33.1711 18.8803C33.6376 17.9908 33.2946 16.8916 32.4051 16.4251C31.5156 15.9586 30.4164 16.3015 29.9499 17.191C29.4834 18.0806 29.8263 19.1798 30.7159 19.6463Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}