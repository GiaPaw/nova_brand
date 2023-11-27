
drop schema `clothes`;
CREATE SCHEMA `clothes` ;
use `clothes`;
CREATE TABLE `clothes`.`user` (
  `user_id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) ,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) ,
  `birth` DATE NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE (`username`));
  
INSERT INTO `clothes`.`user` (`user_id`, `username`, `email`, `firstname`, `lastname`, `phone`, `address`, `gender`, `birth`) VALUES ('1', 'doanngocyen', 'doanngocyen@gmail.com', 'yen', 'doan', '0793232850', 'Dương Quảng Hàm, Phường 13, Bình Thạnh', 'Nữ', '2000-05-02');

  
  CREATE TABLE `clothes`.`product_category` (
  `productCategory_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`productCategory_id`));
  
INSERT INTO `clothes`.`product_category` (`productCategory_id`, `name`) VALUES ('1', 'Áo');
INSERT INTO `clothes`.`product_category` (`productCategory_id`, `name`) VALUES ('2', 'Quần');
INSERT INTO `clothes`.`product_category` (`productCategory_id`, `name`) VALUES ('3', 'Phụ kiện');


CREATE TABLE `clothes`.`brand` (
  `brand_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`brand_id`));
  
INSERT INTO `clothes`.`brand` (`brand_id`, `name`) VALUES ('1', 'UNI QLO');


CREATE TABLE `clothes`.`product_detail` (
  `productDetail_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `discription` VARCHAR(200) NULL,
  PRIMARY KEY (`productDetail_id`));
  
INSERT INTO `clothes`.`product_detail` (`productDetail_id`, `name`, `discription`) VALUES ('1', 'Áo thun', 'Ngắn tay, cổ tròn');
INSERT INTO `clothes`.`product_detail` (`productDetail_id`, `name`, `discription`) VALUES ('2', 'Áo nỉ và hoddie', 'Dài tay');
INSERT INTO `clothes`.`product_detail` (`productDetail_id`, `name`) VALUES ('3', 'Áo sơ mi và áo kiểu');
INSERT INTO `clothes`.`product_detail` (`productDetail_id`, `name`) VALUES ('4', 'Áo Polo');


  
  CREATE TABLE `clothes`.`product` (
  `product_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `discription` VARCHAR(200) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `image_cover` VARCHAR(45) NOT NULL,
  `size_cover` VARCHAR(45) NOT NULL,
  `color_cover` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `productCategory_id` INT NOT NULL,
  `brand_id` INT NOT NULL,
  `productDetail_id` INT NOT NULL,
  PRIMARY KEY (`product_id`),
  FOREIGN KEY (`productDetail_id`) REFERENCES `product_detail`(`productDetail_id`),
  FOREIGN KEY (`brand_id`) REFERENCES `brand`(`brand_id`)
  );
  
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('1', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Black.png', 'S', 'Black', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('2', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Black.png', 'M', 'Black', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('3', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Black.png', 'L', 'Black', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('4', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Black.png', 'XL', 'Black', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('5', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Brown.png', 'S', 'Brown', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('6', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Brown.png', 'M', 'Brown', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('7', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Brown.png', 'L', 'Brown', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('8', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Brown.png', 'XL', 'Brown', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('9', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Olive.png', 'S', 'Olive', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('10', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Olive.png', 'M', 'Olive', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('11', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Olive.png', 'L', 'Olive', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('12', 'Áo Thun Cổ Tròn Ngắn Tay', 'Chất liệu vải dày sẽ tạo nên nét đặc trưng khi bạn mặc nó. Phù hợp thoải mái linh hoạt.', '299.000', 'Olive.png', 'XL', 'Olive', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('13', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Green_Soc.png', 'S', 'Green', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('14', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Green_Soc.png', 'M', 'Green', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('15', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Green_Soc.png', 'L', 'Green', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('16', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Green_Soc.png', 'XL', 'Green', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('17', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Navy_Soc.png', 'S', 'Navy', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('18', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Navy_Soc.png', 'M', 'Navy', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('19', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Navy_Soc.png', 'L', 'Navy', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('20', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Navy_Soc.png', 'XL', 'Navy', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('21', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Yellow_Soc.png', 'S', 'Yellow', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('22', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Yellow_Soc.png', 'M', 'Yellow', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('23', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Yellow_Soc.png', 'L', 'Yellow', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('24', 'Áo Thun Dáng Rộng Kẻ Sọc', 'Áo thun 100% cotton bền đẹp. Thiết kế và kiểu dáng đẹp mắt', '399.000', 'Yellow_Soc.png', 'XL', 'Yellow', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('25', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Gray_Ngan.png', 'S', 'Gray', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('26', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Gray_Ngan.png', 'M', 'Gray', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('27', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Gray_Ngan.png', 'L', 'Gray', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('28', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Gray_Ngan.png', 'XL', 'Gray', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('29', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Olive_Ngan.png', 'S', 'Olive', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('30', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Olive_Ngan.png', 'M', 'Olive', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('31', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Olive_Ngan.png', 'L', 'Olive', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('32', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Olive_Ngan.png', 'XL', 'Olive', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('33', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Pink_Ngan.png', 'S', 'Pink', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('34', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Pink_Ngan.png', 'M', 'Pink', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('35', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Pink_Ngan.png', 'L', 'Pink', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('36', 'Áo Thun Dáng Rộng Ngắn Tay', 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản', '399.000', 'Pink_Ngan.png', 'XL', 'Pink', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('37', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'Black_Cotton.png', 'S', 'Black', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('38', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'Black_Cotton.png', 'M', 'Black', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('39', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'Black_Cotton.png', 'L', 'Black', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('40', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'Black_Cotton.png', 'XL', 'Black', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('41', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'White_Cotton.png', 'S', 'White', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('42', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'White_Cotton.png', 'M', 'White', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('43', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'White_Cotton.png', 'L', 'White', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('44', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'White_Cotton.png', 'XL', 'White', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('45', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'Gray_Cotton.png', 'S', 'Gray', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('46', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'Gray_Cotton.png', 'M', 'Gray', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('47', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'Gray_Cotton.png', 'L', 'Gray', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('48', 'Áo Thun Supima Cotton', 'Áo thun SUPIMA cotton 100% cao cấp đã được cập nhật thành loại vải bền hơn', '299.000', 'Gray_Cotton.png', 'XL', 'Gray', '100', 'Còn hàng', '1', '1', '1');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('49', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.000', 'Black_AIRism.png', 'S', 'Black', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('50', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.000', 'Black_AIRism.png', 'M', 'Black', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('51', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.000', 'Black_AIRism.png', 'L', 'Black', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('52', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.000', 'Black_AIRism.png', 'XL', 'Black', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('53', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.00', 'Green_AIRism.png', 'S', 'Green', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('54', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.00', 'Green_AIRism.png', 'M', 'Green', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('55', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.00', 'Green_AIRism.png', 'L', 'Green', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('56', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.00', 'Green_AIRism.png', 'XL', 'Green', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('57', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.00', 'White_AIRism.png', 'S', 'White', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('58', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.00', 'White_AIRism.png', 'M', 'White', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('59', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.00', 'White_AIRism.png', 'L', 'White', '100', 'Còn hàng', '1', '1', '4');
INSERT INTO `clothes`.`product` (`product_id`, `name`, `discription`, `price`, `image_cover`, `size_cover`, `color_cover`, `quantity`, `status`, `productCategory_id`, `brand_id`, `productDetail_id`) VALUES ('60', 'AIRism Áo Polo Cổ Thường', 'Vải \'AIRism\' mượt mà, thoáng mát. Một chiếc Polo đa năng cho trang phục thường ngày hoặc tinh tế', '499.00', 'White_AIRism.png', 'XL', 'White', '100', 'Còn hàng', '1', '1', '4');

  CREATE TABLE `clothes`.`size` (
  `size` VARCHAR(10) NOT NULL,
  `product_id` INT NOT NULL,
  `productDetail_id` INT NOT NULL,
  PRIMARY KEY (`size`),
  FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`),
  FOREIGN KEY (`productDetail_id`) REFERENCES `product_detail`(`productDetail_id`)
  );
  
  CREATE TABLE `clothes`.`image` (
  `image` VARCHAR(45) NOT NULL,
  `product_id` INT NOT NULL,
  `productDetail_id` INT NOT NULL,
  PRIMARY KEY ( `image`),
  FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`),
  FOREIGN KEY (`productDetail_id`) REFERENCES `product_detail`(`productDetail_id`)
  );

CREATE TABLE `clothes`.`color` (
  `color` VARCHAR(10) NOT NULL,
  `product_id` INT NOT NULL,
  `productDetail_id` INT NOT NULL,
  PRIMARY KEY (`color`),
  FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`),
  FOREIGN KEY (`productDetail_id`) REFERENCES `product_detail`(`productDetail_id`)
  );
  
  
  
  CREATE TABLE `clothes`.`order` (
  `order_id` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `order_date` DATETIME NOT NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`order_id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`)
  );

INSERT INTO `clothes`.`order` (`order_id`, `status`, `order_date`, `user_id`) VALUES ('1', 'Đã đặt hàng', '2023-06-01', '1');

CREATE TABLE `clothes`.`order_detail` (
  `orderDetail_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`orderDetail_id`),
  FOREIGN KEY (`order_id`) REFERENCES `order`(`order_id`),
  FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`)
  );
  
INSERT INTO `clothes`.`order_detail` (`orderDetail_id`, `order_id`, `product_id`, `price`, `quantity`) VALUES ('1', '1', '1', '299.000', '1');


CREATE TABLE `clothes`.`admin` (
  `admin_id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `fullname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  PRIMARY KEY (`admin_id`),
   UNIQUE (`username`));
   
INSERT INTO `clothes`.`admin` (`admin_id`, `username`, `password`, `fullname`, `email`, `phone`) VALUES ('1', 'buitrungtuan', '123456', 'Bui Trung Tuan', 'buitrungtuan@gmail.com', '0351206203');
INSERT INTO `clothes`.`admin` (`admin_id`, `username`, `password`, `fullname`, `email`, `phone`) VALUES ('2', 'phamvan', '123456', 'Pham Thi Ngoc Van', 'phamvan@gmail.com', '0794259155');

  
  CREATE TABLE `clothes`.`feedback` (
  `feedback_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `feedback` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`feedback_id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`));
  
INSERT INTO `clothes`.`feedback` (`feedback_id`, `user_id`, `date`, `feedback`) VALUES ('1', '1', '2020-06-01', 'Sản phẩm rất đẹp, chất liệu vải dày');
