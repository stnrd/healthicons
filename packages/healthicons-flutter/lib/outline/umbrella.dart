import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Umbrella extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Umbrella({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9897 4C24.542 4 24.9897 4.44772 24.9897 5V6.00506C33.4278 6.47242 40.3198 12.7369 41.7493 20.8821C41.773 21.0172 41.7952 21.1528 41.8159 21.2889C41.8808 21.7159 41.9308 22.1479 41.9652 22.5842C41.9767 22.73 41.9865 22.8763 41.9945 23.023C42.0105 23.3159 41.6556 23.366 41.4377 23.1697C41.3967 23.1328 41.3552 23.0963 41.3133 23.0602C40.9637 22.7594 40.5849 22.4915 40.1818 22.2614C40.0922 22.2102 40.0014 22.1609 39.9094 22.1136C38.9201 21.6039 37.7977 21.3161 36.6081 21.3161C34.4375 21.3161 32.4907 22.2741 31.1674 23.7904C31.0414 23.9348 30.8614 24.023 30.6697 24.023C30.5 24.023 30.3382 23.9539 30.2159 23.8363C28.8231 22.4961 27.0007 21.5992 24.9757 21.3725V39.5C24.9757 40.8807 26.095 42 27.4757 42C28.8564 42 29.9757 40.8807 29.9757 39.5V38C29.9757 37.4477 30.4234 37 30.9757 37C31.528 37 31.9757 37.4477 31.9757 38V39.5C31.9757 41.9853 29.961 44 27.4757 44C24.9904 44 22.9757 41.9853 22.9757 39.5V21.3692C20.9338 21.5909 19.0963 22.4939 17.6953 23.8461C17.5797 23.9576 17.4265 24.023 17.2659 24.023C17.0844 24.023 16.9139 23.9396 16.7949 23.8026C15.4715 22.2793 13.5201 21.3162 11.3437 21.3162C10.154 21.3162 9.03151 21.604 8.04208 22.1138C7.95017 22.1612 7.85942 22.2104 7.76986 22.2616C7.36683 22.4917 6.98812 22.7595 6.63854 23.0603C6.59665 23.0963 6.55518 23.1328 6.51413 23.1698C6.29613 23.3662 5.94107 23.316 5.95707 23.023C5.96509 22.8762 5.97486 22.7298 5.98637 22.5839C6.02079 22.1477 6.07071 21.7159 6.13559 21.289C6.15627 21.153 6.17846 21.0174 6.20215 20.8824C7.63315 12.728 14.5388 6.45859 22.9897 6.00353V5C22.9897 4.44772 23.4375 4 23.9897 4ZM23.9897 8C23.9182 8 23.8484 7.99249 23.7811 7.97821C16.4797 8.065 10.3505 13.0292 8.50109 19.7633C9.39678 19.4731 10.3523 19.3162 11.3437 19.3162C13.6312 19.3162 15.7252 20.151 17.3353 21.5289C19.179 20.1407 21.475 19.3161 23.9607 19.3161C26.4537 19.3161 28.7558 20.1455 30.6022 21.541C32.2142 20.1559 34.3139 19.3161 36.6081 19.3161C37.5994 19.3161 38.5548 19.473 39.4504 19.7631C37.6032 13.0372 31.4865 8.07696 24.1968 7.97854C24.13 7.9926 24.0607 8 23.9897 8Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}