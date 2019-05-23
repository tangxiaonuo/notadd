import { PostService } from '../core/post.service';
import { PostEntity } from '../../typeorm/entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

export class PostServiceImpl extends PostService {
    constructor(
        @InjectRepository(PostEntity) private readonly postRepo: Repository<PostEntity>,
    ) { super() }

    /**
     * 插入一条数据
     * @param post 
     */
     insert(post: PostEntity): Promise<PostEntity> {
        
      return  this.postRepo.save (post);
    }
    /**
     * 查询一条数据
     * @param where 
     */
    async get(where: Partial<PostEntity>): Promise<PostEntity> {
        await this.postRepo.findOne(where)
        throw new Error("");
    }
    /**
     * 更新一条数据
     * @param post 
     * @param where 
     */
    async save(post: PostEntity, where: Partial<PostEntity>): Promise<PostEntity> {

        throw new Error();
    }
    /**
     * 删除一条数据
     * @param post 
     */
    delete(post: Partial<PostEntity>): Promise<DeleteResult> {
        throw new Error("Method not implemented.");
    }

    search(where: Partial<import("../../typeorm/entities/post.entity").PostEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }


}