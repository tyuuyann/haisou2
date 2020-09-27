package jp.co.sample.common;

import java.io.InputStream;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

@Mapper
public class Dao {
	SqlSessionFactory factory;

	/**
	 * 複数検索
	 * @param entity
	 * @return
	 */
	public <Entity extends BaseEntity> List<Entity> selectByValue(Entity entity) {
		try (InputStream in = Resources.getResourceAsStream("jp/co/sample/mybatis_config.xml")) {
          SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
          try (SqlSession session = factory.openSession()) {
              return session.selectList(entity.getTable() + ".selectByPK",entity);
          }
      } catch (Exception e) {
      	System.out.println(e);
      }
		return null;
	}

	/**
	 * １件検索
	 * @param entity
	 * @return
	 */
	public <Entity extends BaseEntity>Entity selectByPK(Entity entity) {
		try (InputStream in = Resources.getResourceAsStream("jp/co/sample/mybatis_config.xml")) {
          SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
          try (SqlSession session = factory.openSession()) {
              return session.selectOne(entity.getTable() + ".selectByPK",entity);
          }
      } catch (Exception e) {
      	System.out.println(e);
      }
		return null;
	}
}
